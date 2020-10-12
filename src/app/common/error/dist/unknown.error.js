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
exports.__esModule = true;
exports.UnknownError = void 0;
var app_error_1 = require("./app.error");
var UnknownError = /** @class */ (function (_super) {
    __extends(UnknownError, _super);
    function UnknownError(error, resourceName) {
        var _this = _super.call(this, error, resourceName) || this;
        _this.description = 'Some unknown error happened. Please try later ...';
        return _this;
    }
    return UnknownError;
}(app_error_1.AppError));
exports.UnknownError = UnknownError;
