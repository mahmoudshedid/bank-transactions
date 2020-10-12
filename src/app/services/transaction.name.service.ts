import { TransactionNameSerializer } from '../models/transaction.name.serializer';
import { HttpClient } from '@angular/common/http';
import { TransactionName } from '../models/transaction.name';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionNameService extends ResourceService<TransactionName>  {

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      '../assets/mock',
      'transactions.json',
      new TransactionNameSerializer(),
      'Transaction'
    );
  }
}
