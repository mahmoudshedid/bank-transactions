"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransactionNameService = void 0;
var transaction_name_serializer_1 = require("../models/transaction.name.serializer");
var core_1 = require("@angular/core");
var resource_service_1 = require("./resource.service");
var TransactionNameService = /** @class */ (function (_super) {
    __extends(TransactionNameService, _super);
    function TransactionNameService(httpClient) {
        return _super.call(this, httpClient, '../assets/mock', 'transactions.json', new transaction_name_serializer_1.TransactionNameSerializer(), 'Transaction') || this;
    }
    TransactionNameService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TransactionNameService);
    return TransactionNameService;
}(resource_service_1.ResourceService));
exports.TransactionNameService = TransactionNameService;
