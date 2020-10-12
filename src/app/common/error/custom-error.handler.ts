import { MessageService } from './../../services/message.service';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {

  constructor(private messageService: MessageService){
  }

  handleError(error: any): void {
    console.log(error);
    this.messageService.sendMessage({
      type: 'danger',
      title: (error.errorNumber !== undefined ? error.errorNumber + ' ' : '') + 'Error',
      body: error.description
    });
  }
}
