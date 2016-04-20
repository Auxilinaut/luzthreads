System.register(['angular2/core', 'angular2/router', './craft.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, craft_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (craft_service_1_1) {
                craft_service_1 = craft_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router, _craftService) {
                    this._router = _router;
                    this._craftService = _craftService;
                    this.crafts = [];
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._craftService.getCrafts().then(function (crafts) { return _this.crafts = crafts.slice(Math.max(crafts.length - 3, 1)).reverse(); });
                };
                HomeComponent.prototype.gotoDetail = function (craft) {
                    var link = ['CraftDetail', { id: craft.id }];
                    this._router.navigate(link);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'home.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, craft_service_1.CraftService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map