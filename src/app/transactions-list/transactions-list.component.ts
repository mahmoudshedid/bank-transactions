import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { TransactionService } from './../services/transaction.service';
import { TransferService } from './../services/transfer.service';
import { TransactionDetails } from './../models/transaction.details';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject<void>();
  subscription: Subscription;

  transactionList: TransactionDetails[];

  constructor(
    private transactionService: TransactionService,
    private transferService: TransferService
  ) {
    this.subscription = this.transferService.getTransfer().subscribe(data => {
      if (data) {
        this.updateTransactionList(data);
      }
    });
  }

  ngOnInit(): void {
    this.initTransactionsData();
  }

  private initTransactionsData(): void {
    this.transactionService.list().pipe(
      map(values => {
        this.transactionList = values;
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  onTransactionListFiltered(transactionList: TransactionDetails[]): void {
    this.transactionList = transactionList;
  }

  private updateTransactionList(data: any): void {
    const transactionList = new TransactionDetails();
    Object.assign(transactionList, JSON.parse(JSON.stringify(this.getAccountDetails(data.name)[0])));
    const today = new Date();
    transactionList.transaction.amountCurrency.amount = parseFloat(data.amount);
    transactionList.dates.valueDate = today.valueOf();
    this.transactionList.unshift(transactionList);
  }

  private getAccountDetails(name: string): any {
    return this.transactionList.filter(value => {
      if (value.merchant.name !== undefined && value.merchant.name === name) {
        return value;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
    this.subscription.unsubscribe();
  }
}
