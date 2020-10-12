"use strict";
exports.__esModule = true;
exports.TransactionNameSerializer = void 0;
var transaction_name_1 = require("./transaction.name");
var TransactionNameSerializer = /** @class */ (function () {
    function TransactionNameSerializer() {
    }
    TransactionNameSerializer.prototype.fromJson = function (json) {
        var transactionName = new transaction_name_1.TransactionName();
        transactionName.name = json.merchant.name;
        return transactionName;
    };
    TransactionNameSerializer.prototype.toJson = function (transactionName) {
    };
    return TransactionNameSerializer;
}());
exports.TransactionNameSerializer = TransactionNameSerializer;
