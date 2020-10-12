"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchTransactionListService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var SearchTransactionListService = /** @class */ (function () {
    function SearchTransactionListService() {
        this.subject = new rxjs_1.Subject();
    }
    SearchTransactionListService.prototype.sendTransactionList = function (transactionList) {
        this.subject.next(transactionList);
    };
    SearchTransactionListService.prototype.clearTransactionList = function () {
        this.subject.next();
    };
    SearchTransactionListService.prototype.getTransactionList = function () {
        return this.subject.asObservable();
    };
    SearchTransactionListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SearchTransactionListService);
    return SearchTransactionListService;
}());
exports.SearchTransactionListService = SearchTransactionListService;
