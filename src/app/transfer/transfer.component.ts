import { MessageService } from './../services/message.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionName } from './../models/transaction.name';
import { TransactionNameService } from './../services/transaction.name.service';
import { TransferService } from './../services/transfer.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject<void>();
  transferForm: FormGroup;
  fromAccountLocal: string;
  localAccount = 'Free Checking(4692) - €';
  localAccountAmount = 5824.76;
  transactionNameList: TransactionName[];
  MIN_AMOUNT = -500;
  confirmToAccount: string;
  confirmAmount: string;
  confirmVisible = 'none';
  submitButton = 'block';

  accountValidationMessages = {
    toAccount: [
      { type: 'required', message: 'To Account is required.' },
      { type: 'minlength', message: 'To Account must be at least 3 characters long.' },
      { type: 'maxlength', message: 'To Account cannot be more than 30 characters long.' },
      { type: 'pattern', message: 'To Account must contain only characters, numbers, hyphen, underscore and \'&\'.' },
    ],
    amount: [
      { type: 'required', message: 'Amount is required.' },
      { type: 'minlength', message: 'Amount must be at least 1 decimal.' },
      { type: 'maxlength', message: 'Amount cannot be more than 10 decimal with format 00.00.' },
      { type: 'pattern', message: 'Amount must contain only decimal with format 00.00.' },
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private transactionNameService: TransactionNameService,
    private transferService: TransferService,
    private messageService: MessageService
  ) {
    this.fromAccountLocal = this.localAccount + this.localAccountAmount.toLocaleString();
    this.createForm();
  }

  ngOnInit(): void {
    this.initTransactionsData();
  }

  private initTransactionsData(): void {
    this.transactionNameService.list().pipe(
      map(values => {
        this.transactionNameList = values;
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  createForm(): void {
    this.transferForm = this.formBuilder.group({
      fromAccount: [{ value: this.fromAccountLocal, disabled: true }, Validators.required],
      toAccount: ['',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9 &_-]*$'), Validators.maxLength(30), Validators.minLength(3)]
      ],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,2})?$'), Validators.maxLength(13), Validators.minLength(1)]],
    });
  }

  cancel(): void {
    this.confirmVisible = 'none';
    this.submitButton = 'block';
    this.transferForm.reset();
    this.transferForm.controls.fromAccount.setValue(this.fromAccountLocal);
  }

  startTransfer(): void {
    const accountExist = this.checkAccountExist(this.transferForm.get('toAccount').value);

    if (accountExist) {
      const willBeLocalAccountAmount = this.localAccountAmount - this.transferForm.get('amount').value;
      if (willBeLocalAccountAmount >= this.MIN_AMOUNT) {
        this.confirmToAccount = this.transferForm.get('toAccount').value;
        this.confirmAmount = this.transferForm.get('amount').value;
        this.confirmVisible = 'block';
        this.submitButton = 'none';
      } else {
        this.messageService.sendMessage({
          type: 'warning',
          title: 'Account Balance',
          body: 'Your account is not sufficient, your account will be "' + willBeLocalAccountAmount + '".'
        });
        console.log('Your account is not sufficient, your account will be "' + willBeLocalAccountAmount + '".');
      }
    } else {
      this.messageService.sendMessage({
        type: 'warning',
        title: 'To Account',
        body: 'This account "' + this.transferForm.get('toAccount').value + '" is not exist.'
      });
      console.log('This account "' + this.transferForm.get('toAccount').value + '" is not exist.');
    }
  }

  onSubmit(): void {
    this.confirmVisible = 'none';
    this.submitButton = 'block';
    const willBeLocalAccountAmount = this.localAccountAmount - this.transferForm.get('amount').value;
    this.sendTransfer({
      name: this.transferForm.get('toAccount').value,
      amount: this.transferForm.get('amount').value
    });
    this.localAccountAmount = willBeLocalAccountAmount;
    this.fromAccountLocal = this.localAccount + this.localAccountAmount.toLocaleString();
    this.cancel();
  }

  private checkAccountExist(accountName: string): boolean {
    const name = this.transactionNameList.filter((value: any) => {
      if (value.name === accountName) {
        return value.name;
      }
    });
    return name.length > 0 ? true : false;
  }

  private sendTransfer(transfer: any): void {
    this.transferService.sendTransfer(transfer);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

}
