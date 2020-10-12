import { TransactionDetailsSerializer } from './../models/transaction.details.serializer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionDetails } from '../models/transaction.details';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends ResourceService<TransactionDetails> {

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      '../assets/mock',
      'transactions.json',
      new TransactionDetailsSerializer(),
      'Transaction'
    );
  }
}
