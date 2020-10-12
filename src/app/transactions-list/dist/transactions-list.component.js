"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransactionsListComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var transaction_details_1 = require("./../models/transaction.details");
var TransactionsListComponent = /** @class */ (function () {
    function TransactionsListComponent(transactionService, transferService) {
        var _this = this;
        this.transactionService = transactionService;
        this.transferService = transferService;
        this.destroyed$ = new rxjs_1.Subject();
        this.subscription = this.transferService.getTransfer().subscribe(function (data) {
            if (data) {
                _this.updateTransactionList(data);
            }
        });
    }
    TransactionsListComponent.prototype.ngOnInit = function () {
        this.initTransactionsData();
    };
    TransactionsListComponent.prototype.initTransactionsData = function () {
        var _this = this;
        this.transactionService.list().pipe(operators_1.map(function (values) {
            _this.transactionList = values;
        }), operators_1.takeUntil(this.destroyed$)).subscribe();
    };
    TransactionsListComponent.prototype.onTransactionListFiltered = function (transactionList) {
        this.transactionList = transactionList;
    };
    TransactionsListComponent.prototype.updateTransactionList = function (data) {
        var transactionList = new transaction_details_1.TransactionDetails();
        Object.assign(transactionList, JSON.parse(JSON.stringify(this.getAccountDetails(data.name)[0])));
        var today = new Date();
        transactionList.transaction.amountCurrency.amount = parseFloat(data.amount);
        transactionList.dates.valueDate = today.valueOf();
        this.transactionList.unshift(transactionList);
    };
    TransactionsListComponent.prototype.getAccountDetails = function (name) {
        return this.transactionList.filter(function (value) {
            if (value.merchant.name !== undefined && value.merchant.name === name) {
                return value;
            }
        });
    };
    TransactionsListComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.unsubscribe();
        this.subscription.unsubscribe();
    };
    TransactionsListComponent = __decorate([
        core_1.Component({
            selector: 'app-transactions-list',
            templateUrl: './transactions-list.component.html',
            styleUrls: ['./transactions-list.component.scss']
        })
    ], TransactionsListComponent);
    return TransactionsListComponent;
}());
exports.TransactionsListComponent = TransactionsListComponent;
