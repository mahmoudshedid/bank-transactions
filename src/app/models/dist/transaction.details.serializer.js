"use strict";
exports.__esModule = true;
exports.TransactionDetailsSerializer = void 0;
var transaction_details_1 = require("./transaction.details");
var TransactionDetailsSerializer = /** @class */ (function () {
    function TransactionDetailsSerializer() {
    }
    TransactionDetailsSerializer.prototype.fromJson = function (json) {
        var transactionDetails = new transaction_details_1.TransactionDetails();
        transactionDetails.categoryCode = json.categoryCode;
        transactionDetails.dates = json.dates;
        transactionDetails.transaction = json.transaction;
        transactionDetails.merchant = json.merchant;
        return transactionDetails;
    };
    TransactionDetailsSerializer.prototype.toJson = function (transactionDetails) {
        return {
            categoryCode: transactionDetails.categoryCode,
            dates: transactionDetails.dates,
            transaction: transactionDetails.transaction,
            merchant: transactionDetails.merchant
        };
    };
    return TransactionDetailsSerializer;
}());
exports.TransactionDetailsSerializer = TransactionDetailsSerializer;
