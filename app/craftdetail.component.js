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
var craft_service_1 = require('./craft.service');
var CraftDetailComponent = (function () {
    function CraftDetailComponent(_router, _routeParams, _craftService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._craftService = _craftService;
        this.display2 = false;
        this.display3 = false;
    }
    CraftDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        var previousid = id - 1;
        var nextid = id + 1;
        this._craftService.getCraft(id).then(function (craft) { return _this.craft = craft; });
        this._craftService.getCraft(previousid).then(function (pc) { return _this.previouscraft = pc; });
        this._craftService.getCraft(nextid).then(function (nc) { return _this.nextcraft = nc; });
    };
    CraftDetailComponent.prototype.goToCrafts = function () {
        this._router.navigate(['Crafts']);
    };
    CraftDetailComponent.prototype.goToDetail = function (idpass) {
        var id = +this._routeParams.get('id');
        //check if next exists
        if (!this.nextcraft && idpass > id) {
        }
        else {
            this._router.navigate(['CraftDetail', { id: idpass }]);
        }
    };
    CraftDetailComponent = __decorate([
        core_1.Component({
            selector: 'craftdetail',
            templateUrl: 'craftdetail.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, craft_service_1.CraftService])
    ], CraftDetailComponent);
    return CraftDetailComponent;
}());
exports.CraftDetailComponent = CraftDetailComponent;
//# sourceMappingURL=craftdetail.component.js.map