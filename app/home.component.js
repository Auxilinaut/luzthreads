System.register(['@angular/core', '@angular/router-deprecated', './craft.service', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, craft_service_1, ng2_bootstrap_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (craft_service_1_1) {
                craft_service_1 = craft_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router, _craftService) {
                    this._router = _router;
                    this._craftService = _craftService;
                    this.crafts = [];
                    this.wip = ({ id: 0, type: "", name: "", description: "", image1: "", image6: "" });
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._craftService.getCraft(0).then(function (craft) { return _this.wip = craft; });
                    this._craftService.getCrafts().then(function (crafts) { return _this.crafts = crafts.slice(Math.max(crafts.length - 3, 1)).reverse(); });
                };
                HomeComponent.prototype.gotoDetail = function (craft) {
                    var link = ['CraftDetail', { id: craft.id }];
                    this._router.navigate(link);
                };
                HomeComponent.prototype.goToCrafts = function () {
                    var link = ['Crafts'];
                    this._router.navigate(link);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.CAROUSEL_DIRECTIVES],
                        templateUrl: 'home.component.html',
                        inputs: ['wip']
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, craft_service_1.CraftService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUdDLHVCQUFvQixPQUFlLEVBQVUsYUFBMkI7b0JBQXBELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBRnhFLFdBQU0sR0FBWSxFQUFFLENBQUM7b0JBQ3JCLFFBQUcsR0FBVSxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO2dCQUNHLENBQUM7Z0JBQzdFLGdDQUFRLEdBQVI7b0JBQUEsaUJBR0M7b0JBRkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQWhCLENBQWdCLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFwRSxDQUFvRSxDQUFDLENBQUM7Z0JBQ3JILENBQUM7Z0JBQ0Qsa0NBQVUsR0FBVixVQUFXLEtBQVk7b0JBQ3RCLElBQUksSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxrQ0FBVSxHQUFWO29CQUNDLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7b0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQXJCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxNQUFNO3dCQUNoQixVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsRUFBRSxtQ0FBbUIsQ0FBQzt3QkFDcEQsV0FBVyxFQUFFLHFCQUFxQjt3QkFDbEMsTUFBTSxFQUFDLENBQUMsS0FBSyxDQUFDO3FCQUNmLENBQUM7O2lDQUFBO2dCQWlCRixvQkFBQztZQUFELENBQUMsQUFoQkQsSUFnQkM7WUFoQkQseUNBZ0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7Q3JhZnR9IGZyb20gJy4vY3JhZnQnO1xyXG5pbXBvcnQge0NyYWZ0U2VydmljZX0gZnJvbSAnLi9jcmFmdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtDQVJPVVNFTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdob21lJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIENBUk9VU0VMX0RJUkVDVElWRVNdLFxyXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaW5wdXRzOlsnd2lwJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG5cdGNyYWZ0czogQ3JhZnRbXSA9IFtdO1xyXG5cdHdpcDogQ3JhZnQgPSAoe2lkOjAsdHlwZTpcIlwiLG5hbWU6XCJcIixkZXNjcmlwdGlvbjpcIlwiLGltYWdlMTpcIlwiLGltYWdlNjpcIlwifSk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2NyYWZ0U2VydmljZTogQ3JhZnRTZXJ2aWNlKSB7IH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX2NyYWZ0U2VydmljZS5nZXRDcmFmdCgwKS50aGVuKGNyYWZ0ID0+IHRoaXMud2lwID0gY3JhZnQpO1xyXG5cdFx0dGhpcy5fY3JhZnRTZXJ2aWNlLmdldENyYWZ0cygpLnRoZW4oY3JhZnRzID0+IHRoaXMuY3JhZnRzID0gY3JhZnRzLnNsaWNlKE1hdGgubWF4KGNyYWZ0cy5sZW5ndGggLSAzLCAxKSkucmV2ZXJzZSgpKTtcclxuXHR9XHJcblx0Z290b0RldGFpbChjcmFmdDogQ3JhZnQpe1xyXG5cdFx0bGV0IGxpbmsgPSBbJ0NyYWZ0RGV0YWlsJywgeyBpZDogY3JhZnQuaWQgfV07XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcblx0fVxyXG5cdGdvVG9DcmFmdHMoKXtcclxuXHRcdGxldCBsaW5rID0gWydDcmFmdHMnXVxyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG5cdH1cclxufSJdfQ==