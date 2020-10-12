"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilteringComponent = void 0;
var core_1 = require("@angular/core");
var FilteringComponent = /** @class */ (function () {
    function FilteringComponent() {
        this.dataFiltered = new core_1.EventEmitter();
        this.currentSortOrder = 'asc';
        this.currentSortOrderKey = 'valueDate';
    }
    FilteringComponent.prototype.ngOnInit = function () {
        if (this.originalData === undefined) {
            this.originalData = this.data;
        }
        this.sortBy(this.currentSortOrderKey);
    };
    FilteringComponent.prototype.clearSearch = function () {
        this.searchInput.nativeElement.value = '';
        this.dataFiltered.emit(this.originalData);
    };
    FilteringComponent.prototype.search = function (event) {
        var _this = this;
        var searchKey = event.target.value;
        this.data = this.originalData;
        this.data = this.data.filter(function (value) {
            var newValue;
            if (Number(searchKey)) {
                if (parseInt(value.transaction.amountCurrency.amount, 10) === parseInt(searchKey, 10)) {
                    newValue = value;
                }
                if (parseInt(value.categoryCode, 10) === parseInt(searchKey, 10)) {
                    newValue = value;
                }
            }
            else {
                if (value.transaction.creditDebitIndicator !== undefined &&
                    value.transaction.creditDebitIndicator.toLowerCase() === searchKey.toLowerCase()) {
                    newValue = value;
                }
                if (value.transaction.amountCurrency.currencyCod !== undefined &&
                    value.transaction.amountCurrency.currencyCod.toLowerCase() === searchKey.toLowerCase()) {
                    newValue = value;
                }
                if (value.transaction.type !== undefined && value.transaction.type.toLowerCase() === searchKey.toLowerCase()) {
                    newValue = value;
                }
                if (value.merchant.name !== undefined && value.merchant.name.toLowerCase().includes(searchKey.toLowerCase())) {
                    newValue = value;
                }
            }
            if (searchKey.length > 0) {
                return newValue;
            }
            return _this.originalData;
        });
        this.dataFiltered.emit(this.data);
    };
    FilteringComponent.prototype.sortBy = function (key) {
        if (this.currentSortOrderKey.toLowerCase() === key.toLowerCase() && this.currentSortOrder === 'desc') {
            this.currentSortOrder = 'asc';
        }
        else if (this.currentSortOrderKey.toLowerCase() === key.toLowerCase() && this.currentSortOrder === 'asc') {
            this.currentSortOrder = 'desc';
        }
        this.currentSortOrderKey = key;
        this.sorting(this.currentSortOrderKey, this.currentSortOrder);
    };
    FilteringComponent.prototype.sorting = function (key, order) {
        if (order === void 0) { order = 'asc'; }
        this.dataFiltered.emit(this.data.sort(this.compareValues(key, order)));
    };
    /**
     * To make compare values for sorting.
     * @param key string
     * @param order string 'asc' or 'desc'
     */
    FilteringComponent.prototype.compareValues = function (key, order) {
        var _this = this;
        if (order === void 0) { order = 'asc'; }
        return function (a, b) {
            var elementsCompare = { varA: a, varB: b };
            elementsCompare = _this.getPropertiesValue(elementsCompare, key);
            if (elementsCompare.varA === null || elementsCompare.varB === null) {
                // property doesn't exist on either object
                return 0;
            }
            var comparison = 0;
            if (elementsCompare.varA > elementsCompare.varB) {
                comparison = 1;
            }
            if (elementsCompare.varA < elementsCompare.varB) {
                comparison = -1;
            }
            return ((order === 'desc') ? (comparison * -1) : comparison);
        };
    };
    FilteringComponent.prototype.getPropertiesValue = function (elementsCompare, key) {
        var values = {};
        switch (key) {
            case 'valueDate':
                values = {
                    varA: new Date(elementsCompare.varA.dates.valueDate),
                    varB: new Date(elementsCompare.varB.dates.valueDate)
                };
                return values;
            case 'amount':
                values = {
                    varA: parseFloat(elementsCompare.varA.transaction.amountCurrency.amount),
                    varB: parseFloat(elementsCompare.varB.transaction.amountCurrency.amount)
                };
                return values;
            case 'name':
                values = {
                    varA: elementsCompare.varA.merchant.name.toUpperCase(),
                    varB: elementsCompare.varB.merchant.name.toUpperCase()
                };
                return values;
            default:
                return null;
        }
    };
    __decorate([
        core_1.Input()
    ], FilteringComponent.prototype, "data");
    __decorate([
        core_1.Output()
    ], FilteringComponent.prototype, "dataFiltered");
    __decorate([
        core_1.ViewChild('searchInput', { static: false })
    ], FilteringComponent.prototype, "searchInput");
    FilteringComponent = __decorate([
        core_1.Component({
            selector: 'app-filtering',
            templateUrl: './filtering.component.html',
            styleUrls: ['./filtering.component.scss']
        })
    ], FilteringComponent);
    return FilteringComponent;
}());
exports.FilteringComponent = FilteringComponent;
