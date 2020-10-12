import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private subject = new Subject<any>();

  constructor() { }

  sendTransfer(data: any): void {
    this.subject.next(data);
  }

  clearTransfer(): void {
    this.subject.next();
  }

  getTransfer(): Observable<any> {
    return this.subject.asObservable();
  }
}
