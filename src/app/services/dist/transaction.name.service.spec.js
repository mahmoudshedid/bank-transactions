"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var transaction_name_service_1 = require("./transaction.name.service");
describe('Transaction.NameService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(transaction_name_service_1.TransactionNameService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
