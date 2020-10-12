import { Title } from '@angular/platform-browser';
import { MessageService } from './../services/message.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-box-message',
  templateUrl: './modal-box-message.component.html',
  styleUrls: ['./modal-box-message.component.scss']
})
export class ModalBoxMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  status = 'none';
  type = 'success';
  title: string;
  body: string;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(details => {
      if (details) {
        this.open(details);
      }
    });
   }

  ngOnInit(): void {
  }

  open(details: any): void {
    this.status = 'block';
    this.type = details.type;
    this.title = details.title;
    this.body = details.body;
  }

  close(): void {
    this.status = 'none';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
