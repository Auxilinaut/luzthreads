System.register(['@angular/core', '@angular/router-deprecated', './craft.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, craft_service_1;
    var CraftDetailComponent;
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
            }],
        execute: function() {
            CraftDetailComponent = (function () {
                function CraftDetailComponent(_router, _routeParams, _craftService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._craftService = _craftService;
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
                    //check if next exists, backwards
                    if (idpass < id) {
                        if (!this.previouscraft || this.previouscraft.wip) {
                        }
                        else {
                            this._router.navigate(['CraftDetail', { id: idpass }]);
                        }
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
            exports_1("CraftDetailComponent", CraftDetailComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JhZnRkZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JhZnRkZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBTUMsOEJBQ1MsT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGFBQTJCO29CQUYzQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztnQkFBRSxDQUFDO2dCQUV2Qyx1Q0FBUSxHQUFSO29CQUFBLGlCQU9DO29CQU5BLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksVUFBVSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7b0JBQzVFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7Z0JBQ3JFLENBQUM7Z0JBRUQseUNBQVUsR0FBVjtvQkFDRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQseUNBQVUsR0FBVixVQUFXLE1BQU07b0JBQ2hCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLGlDQUFpQztvQkFDakMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFFbkQsQ0FBQzt3QkFBQSxJQUFJLENBQUEsQ0FBQzs0QkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELENBQUM7b0JBQ0YsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELENBQUM7Z0JBQ0YsQ0FBQztnQkF4Q0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsV0FBVyxFQUFFLDRCQUE0QjtxQkFDMUMsQ0FBQzs7d0NBQUE7Z0JBMkNGLDJCQUFDO1lBQUQsQ0FBQyxBQTFDRCxJQTBDQztZQTFDRCx1REEwQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtDcmFmdH0gZnJvbSAnLi9jcmFmdCc7XHJcbmltcG9ydCB7Q3JhZnRTZXJ2aWNlfSBmcm9tICcuL2NyYWZ0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjcmFmdGRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdjcmFmdGRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENyYWZ0RGV0YWlsQ29tcG9uZW50IHtcclxuXHRjcmFmdDogQ3JhZnQ7XHJcblx0cHJldmlvdXNjcmFmdDogQ3JhZnQ7XHJcblx0bmV4dGNyYWZ0OiBDcmFmdDtcclxuXHRcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxyXG5cdFx0cHJpdmF0ZSBfY3JhZnRTZXJ2aWNlOiBDcmFmdFNlcnZpY2Upe31cclxuXHRcdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0bGV0IGlkID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcclxuXHRcdGxldCBwcmV2aW91c2lkID0gaWQgLSAxO1xyXG5cdFx0bGV0IG5leHRpZCA9IGlkICsgMTtcclxuXHRcdHRoaXMuX2NyYWZ0U2VydmljZS5nZXRDcmFmdChpZCkudGhlbihjcmFmdCA9PiB0aGlzLmNyYWZ0ID0gY3JhZnQpO1xyXG5cdFx0dGhpcy5fY3JhZnRTZXJ2aWNlLmdldENyYWZ0KHByZXZpb3VzaWQpLnRoZW4ocGMgPT4gdGhpcy5wcmV2aW91c2NyYWZ0ID0gcGMpO1xyXG5cdFx0dGhpcy5fY3JhZnRTZXJ2aWNlLmdldENyYWZ0KG5leHRpZCkudGhlbihuYyA9PiB0aGlzLm5leHRjcmFmdCA9IG5jKTtcclxuXHR9XHJcblx0XHJcblx0Z29Ub0NyYWZ0cygpIHtcclxuICBcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ3JhZnRzJ10pO1xyXG5cdH1cclxuXHRcclxuXHRnb1RvRGV0YWlsKGlkcGFzcykgeyBcclxuXHRcdGxldCBpZCA9ICt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XHJcblx0XHQvL2NoZWNrIGlmIG5leHQgZXhpc3RzLCBiYWNrd2FyZHNcclxuXHRcdGlmIChpZHBhc3M8aWQpe1xyXG5cdFx0XHRpZiAoIXRoaXMucHJldmlvdXNjcmFmdCB8fCB0aGlzLnByZXZpb3VzY3JhZnQud2lwKXtcclxuXHRcdFx0XHQvL2RvIG5vdGhpbmdcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ3JhZnREZXRhaWwnLCB7IGlkOiBpZHBhc3MgfV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ3JhZnREZXRhaWwnLCB7IGlkOiBpZHBhc3MgfV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKlxyXG5cdGdvVG9Db250YWN0KCkge1xyXG4gIFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb250YWN0J10pO1xyXG5cdH0qL1xyXG59Il19