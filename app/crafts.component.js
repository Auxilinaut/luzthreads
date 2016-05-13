"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var craftdetail_component_1 = require('./craftdetail.component');
var craft_service_1 = require('./craft.service');
var CraftsComponent = (function () {
    function CraftsComponent(_router, _craftService) {
        this._router = _router;
        this._craftService = _craftService;
    }
    CraftsComponent.prototype.getCrafts = function () {
        var _this = this;
        this._craftService.getCrafts().then(function (crafts) { return _this.crafts = crafts.reverse(); });
    };
    CraftsComponent.prototype.ngOnInit = function () {
        this.getCrafts();
    };
    CraftsComponent.prototype.onSelect = function (craft) { this.selectedCraft = craft; };
    CraftsComponent.prototype.goToDetail = function (idpass) {
        this._router.navigate(['CraftDetail', { id: idpass }]);
    };
    CraftsComponent = __decorate([
        core_1.Component({
            selector: 'crafts',
            templateUrl: 'crafts.component.html',
            directives: [craftdetail_component_1.CraftDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, craft_service_1.CraftService])
    ], CraftsComponent);
    return CraftsComponent;
}());
exports.CraftsComponent = CraftsComponent;
//# sourceMappingURL=crafts.component.js.map