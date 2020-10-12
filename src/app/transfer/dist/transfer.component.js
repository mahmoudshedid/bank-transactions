"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransferComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var TransferComponent = /** @class */ (function () {
    function TransferComponent(formBuilder, transactionNameService, transferService, messageService) {
        this.formBuilder = formBuilder;
        this.transactionNameService = transactionNameService;
        this.transferService = transferService;
        this.messageService = messageService;
        this.destroyed$ = new rxjs_1.Subject();
        this.localAccount = 'Free Checking(4692) - €';
        this.localAccountAmount = 5824.76;
        this.MIN_AMOUNT = -500;
        this.confirmVisible = 'none';
        this.submitButton = 'block';
        this.accountValidationMessages = {
            toAccount: [
                { type: 'required', message: 'To Account is required.' },
                { type: 'minlength', message: 'To Account must be at least 3 characters long.' },
                { type: 'maxlength', message: 'To Account cannot be more than 30 characters long.' },
                { type: 'pattern', message: 'To Account must contain only characters, numbers, hyphen, underscore and \'&\'.' },
            ],
            amount: [
                { type: 'required', message: 'Amount is required.' },
                { type: 'minlength', message: 'Amount must be at least 1 decimal.' },
                { type: 'maxlength', message: 'Amount cannot be more than 10 decimal with format 00.00.' },
                { type: 'pattern', message: 'Amount must contain only decimal with format 00.00.' },
            ]
        };
        this.fromAccountLocal = this.localAccount + this.localAccountAmount.toLocaleString();
        this.createForm();
    }
    TransferComponent.prototype.ngOnInit = function () {
        this.initTransactionsData();
    };
    TransferComponent.prototype.initTransactionsData = function () {
        var _this = this;
        this.transactionNameService.list().pipe(operators_1.map(function (values) {
            _this.transactionNameList = values;
        }), operators_1.takeUntil(this.destroyed$)).subscribe();
    };
    TransferComponent.prototype.createForm = function () {
        this.transferForm = this.formBuilder.group({
            fromAccount: [{ value: this.fromAccountLocal, disabled: true }, forms_1.Validators.required],
            toAccount: ['',
                [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9 &_-]*$'), forms_1.Validators.maxLength(30), forms_1.Validators.minLength(3)]
            ],
            amount: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]+(.[0-9]{0,2})?$'), forms_1.Validators.maxLength(13), forms_1.Validators.minLength(1)]]
        });
    };
    TransferComponent.prototype.cancel = function () {
        this.confirmVisible = 'none';
        this.submitButton = 'block';
        this.transferForm.reset();
        this.transferForm.controls.fromAccount.setValue(this.fromAccountLocal);
    };
    TransferComponent.prototype.startTransfer = function () {
        var accountExist = this.checkAccountExist(this.transferForm.get('toAccount').value);
        if (accountExist) {
            var willBeLocalAccountAmount = this.localAccountAmount - this.transferForm.get('amount').value;
            if (willBeLocalAccountAmount >= this.MIN_AMOUNT) {
                this.confirmToAccount = this.transferForm.get('toAccount').value;
                this.confirmAmount = this.transferForm.get('amount').value;
                this.confirmVisible = 'block';
                this.submitButton = 'none';
            }
            else {
                this.messageService.sendMessage({
                    type: 'warning',
                    title: 'Account Balance',
                    body: 'Your account is not sufficient, your account will be "' + willBeLocalAccountAmount + '".'
                });
                console.log('Your account is not sufficient, your account will be "' + willBeLocalAccountAmount + '".');
            }
        }
        else {
            this.messageService.sendMessage({
                type: 'warning',
                title: 'To Account',
                body: 'This account "' + this.transferForm.get('toAccount').value + '" is not exist.'
            });
            console.log('This account "' + this.transferForm.get('toAccount').value + '" is not exist.');
        }
    };
    TransferComponent.prototype.onSubmit = function () {
        this.confirmVisible = 'none';
        this.submitButton = 'block';
        var willBeLocalAccountAmount = this.localAccountAmount - this.transferForm.get('amount').value;
        this.sendTransfer({
            name: this.transferForm.get('toAccount').value,
            amount: this.transferForm.get('amount').value
        });
        this.localAccountAmount = willBeLocalAccountAmount;
        this.fromAccountLocal = this.localAccount + this.localAccountAmount.toLocaleString();
        this.cancel();
    };
    TransferComponent.prototype.checkAccountExist = function (accountName) {
        var name = this.transactionNameList.filter(function (value) {
            if (value.name === accountName) {
                return value.name;
            }
        });
        return name.length > 0 ? true : false;
    };
    TransferComponent.prototype.sendTransfer = function (transfer) {
        this.transferService.sendTransfer(transfer);
    };
    TransferComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.unsubscribe();
    };
    TransferComponent = __decorate([
        core_1.Component({
            selector: 'app-transfer',
            templateUrl: './transfer.component.html',
            styleUrls: ['./transfer.component.scss']
        })
    ], TransferComponent);
    return TransferComponent;
}());
exports.TransferComponent = TransferComponent;
