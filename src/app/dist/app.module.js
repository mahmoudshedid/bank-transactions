"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var core_2 = require("@angular/core");
var custom_error_handler_1 = require("./common/error/custom-error.handler");
var transaction_service_1 = require("./services/transaction.service");
var message_service_1 = require("./services/message.service");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var transfer_component_1 = require("./transfer/transfer.component");
var recent_transactions_component_1 = require("./recent-transactions/recent-transactions.component");
var filtering_component_1 = require("./filtering/filtering.component");
var transactions_list_component_1 = require("./transactions-list/transactions-list.component");
var header_component_1 = require("./header/header.component");
var currency_code_pipe_1 = require("./pipes/currency-code.pipe");
var modal_box_message_component_1 = require("./modal-box-message/modal-box-message.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                transfer_component_1.TransferComponent,
                recent_transactions_component_1.RecentTransactionsComponent,
                filtering_component_1.FilteringComponent,
                transactions_list_component_1.TransactionsListComponent,
                header_component_1.HeaderComponent,
                currency_code_pipe_1.CurrencyCodePipe,
                modal_box_message_component_1.ModalBoxMessageComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                platform_browser_1.Title,
                transaction_service_1.TransactionService,
                message_service_1.MessageService,
                { provide: core_2.ErrorHandler, useClass: custom_error_handler_1.CustomErrorHandler }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
