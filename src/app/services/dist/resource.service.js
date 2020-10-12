"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ResourceService = void 0;
var core_1 = require("@angular/core");
var unknown_error_1 = require("../common/error/unknown.error");
var not_found_error_1 = require("../common/error/not-found.error");
var bad_request_error_1 = require("../common/error/bad-request.error");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ResourceService = /** @class */ (function () {
    function ResourceService(httpClient, url, endpoint, serializer, resourceName) {
        this.httpClient = httpClient;
        this.url = url;
        this.endpoint = endpoint;
        this.serializer = serializer;
        this.resourceName = resourceName;
    }
    /**
     * Get generic object list from API by ID.
     */
    ResourceService.prototype.list = function () {
        var _this = this;
        return this.httpClient
            .get(this.url + "/" + this.endpoint)
            .pipe(operators_1.map(function (data) { return _this.convertData(data.data); }), operators_1.retry(1), operators_1.catchError(this.handleError));
    };
    /**
     * Convert object to serialize.
     * @param data any
     */
    ResourceService.prototype.convertData = function (data) {
        var _this = this;
        return data.map(function (item) { return _this.serializer.fromJson(item); });
    };
    /**
     * Handle errors from API calling.
     * @param error handleError
     */
    ResourceService.prototype.handleError = function (error) {
        if (error.status === 404) {
            console.log(this.resourceName);
            return rxjs_1.throwError(new not_found_error_1.NotFoundError(error, this.resourceName));
        }
        if (error.status === 400) {
            return rxjs_1.throwError(new bad_request_error_1.BadRequestError(error, this.resourceName));
        }
        return rxjs_1.throwError(new unknown_error_1.UnknownError(error));
    };
    ResourceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_1.Inject(String)),
        __param(2, core_1.Inject(String)),
        __param(3, core_1.Inject(String)),
        __param(4, core_1.Inject(String))
    ], ResourceService);
    return ResourceService;
}());
exports.ResourceService = ResourceService;
