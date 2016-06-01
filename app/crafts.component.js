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
    var CraftsComponent;
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
            CraftsComponent = (function () {
                function CraftsComponent(_router, _craftService) {
                    this._router = _router;
                    this._craftService = _craftService;
                    this.crafts = [];
                    this.startIndex = this._craftService.getLength();
                    this.changeRate = 16;
                }
                CraftsComponent.prototype.ngOnInit = function () {
                    this.endIndex = this.startIndex - this.changeRate;
                    this.addCrafts(this.changeRate);
                };
                CraftsComponent.prototype.addCrafts = function (amount) {
                    var _this = this;
                    if (this.startIndex != 0) {
                        this._craftService.getCrafts(this.startIndex, this.endIndex).then(function (cs) { return _this.crafts = _this.crafts.concat(cs.reverse()); });
                    }
                    if (this.startIndex >= this.changeRate) {
                        this.startIndex -= this.changeRate;
                        this.endIndex -= this.changeRate;
                    }
                    else {
                        this.startIndex = 0;
                        this.endIndex = 0;
                    }
                };
                CraftsComponent.prototype.goToDetail = function (idpass) {
                    this._router.navigate(['CraftDetail', { id: idpass }]);
                };
                CraftsComponent = __decorate([
                    core_1.Component({
                        selector: 'crafts',
                        templateUrl: 'crafts.component.html',
                        inputs: ['changeRate', 'startIndex']
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, craft_service_1.CraftService])
                ], CraftsComponent);
                return CraftsComponent;
            }());
            exports_1("CraftsComponent", CraftsComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JhZnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyYWZ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFPQyx5QkFBb0IsT0FBZSxFQUFVLGFBQTJCO29CQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUx4RSxXQUFNLEdBQVksRUFBRSxDQUFDO29CQUNkLGVBQVUsR0FBVyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUVwRCxlQUFVLEdBQVcsRUFBRSxDQUFDO2dCQUU0QyxDQUFDO2dCQUU1RSxrQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxtQ0FBUyxHQUFULFVBQVUsTUFBYztvQkFBeEIsaUJBWUM7b0JBWEEsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ2hFLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO29CQUN4RCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFFBQVEsSUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNoQyxDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQztvQkFDakIsQ0FBQztnQkFDRixDQUFDO2dCQUVELG9DQUFVLEdBQVYsVUFBVyxNQUFNO29CQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBcENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3ZDLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLENBQUM7cUJBQ25DLENBQUM7O21DQUFBO2dCQWlDRixzQkFBQztZQUFELENBQUMsQUEvQkQsSUErQkM7WUEvQkQsNkNBK0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtDcmFmdH0gZnJvbSAnLi9jcmFmdCc7XHJcbmltcG9ydCB7Q3JhZnRTZXJ2aWNlfSBmcm9tICcuL2NyYWZ0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NyYWZ0cycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NyYWZ0cy5jb21wb25lbnQuaHRtbCcsXHJcblx0aW5wdXRzOiBbJ2NoYW5nZVJhdGUnLCdzdGFydEluZGV4J11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmFmdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0XHJcblx0Y3JhZnRzOiBDcmFmdFtdID0gW107XHJcblx0cHVibGljIHN0YXJ0SW5kZXg6IG51bWJlciA9IHRoaXMuX2NyYWZ0U2VydmljZS5nZXRMZW5ndGgoKTtcclxuXHRlbmRJbmRleDogbnVtYmVyO1xyXG5cdHB1YmxpYyBjaGFuZ2VSYXRlOiBudW1iZXIgPSAxNjtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfY3JhZnRTZXJ2aWNlOiBDcmFmdFNlcnZpY2UpIHt9XHJcblx0XHJcblx0bmdPbkluaXQoKXtcclxuXHRcdHRoaXMuZW5kSW5kZXggPSB0aGlzLnN0YXJ0SW5kZXggLSB0aGlzLmNoYW5nZVJhdGU7XHJcblx0XHR0aGlzLmFkZENyYWZ0cyh0aGlzLmNoYW5nZVJhdGUpO1xyXG5cdH1cclxuXHRcclxuXHRhZGRDcmFmdHMoYW1vdW50PzpudW1iZXIpe1xyXG5cdFx0aWYodGhpcy5zdGFydEluZGV4IT0wKXtcclxuXHRcdFx0dGhpcy5fY3JhZnRTZXJ2aWNlLmdldENyYWZ0cyh0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXgpLnRoZW4oXHJcblx0XHRcdFx0Y3MgPT4gdGhpcy5jcmFmdHMgPSB0aGlzLmNyYWZ0cy5jb25jYXQoY3MucmV2ZXJzZSgpKSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zdGFydEluZGV4Pj10aGlzLmNoYW5nZVJhdGUpe1xyXG5cdFx0XHR0aGlzLnN0YXJ0SW5kZXgtPXRoaXMuY2hhbmdlUmF0ZTtcclxuXHRcdFx0dGhpcy5lbmRJbmRleC09dGhpcy5jaGFuZ2VSYXRlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc3RhcnRJbmRleD0wO1xyXG5cdFx0XHR0aGlzLmVuZEluZGV4PTA7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGdvVG9EZXRhaWwoaWRwYXNzKSB7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDcmFmdERldGFpbCcsIHsgaWQ6IGlkcGFzcyB9XSk7XHJcblx0fVxyXG59Il19