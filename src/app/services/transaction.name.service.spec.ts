import { TestBed } from '@angular/core/testing';

import { TransactionNameService } from './transaction.name.service';

describe('Transaction.NameService', () => {
  let service: TransactionNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
