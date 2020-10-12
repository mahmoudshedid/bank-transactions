"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalBoxMessageComponent = void 0;
var core_1 = require("@angular/core");
var ModalBoxMessageComponent = /** @class */ (function () {
    function ModalBoxMessageComponent(messageService) {
        var _this = this;
        this.messageService = messageService;
        this.status = 'none';
        this.type = 'success';
        this.subscription = this.messageService.getMessage().subscribe(function (details) {
            if (details) {
                _this.open(details);
            }
        });
    }
    ModalBoxMessageComponent.prototype.ngOnInit = function () {
    };
    ModalBoxMessageComponent.prototype.open = function (details) {
        this.status = 'block';
        this.type = details.type;
        this.title = details.title;
        this.body = details.body;
    };
    ModalBoxMessageComponent.prototype.close = function () {
        this.status = 'none';
    };
    ModalBoxMessageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ModalBoxMessageComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-box-message',
            templateUrl: './modal-box-message.component.html',
            styleUrls: ['./modal-box-message.component.scss']
        })
    ], ModalBoxMessageComponent);
    return ModalBoxMessageComponent;
}());
exports.ModalBoxMessageComponent = ModalBoxMessageComponent;
