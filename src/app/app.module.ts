import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

import { CustomErrorHandler } from './common/error/custom-error.handler';
import { TransactionService } from './services/transaction.service';
import { MessageService } from './services/message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { FilteringComponent } from './filtering/filtering.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyCodePipe } from './pipes/currency-code.pipe';
import { ModalBoxMessageComponent } from './modal-box-message/modal-box-message.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    RecentTransactionsComponent,
    FilteringComponent,
    TransactionsListComponent,
    HeaderComponent,
    CurrencyCodePipe,
    ModalBoxMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    Title,
    TransactionService,
    MessageService,
    {provide: ErrorHandler, useClass: CustomErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
