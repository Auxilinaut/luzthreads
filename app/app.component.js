System.register(['@angular/core', '@angular/router-deprecated', './craft.service', './home.component', './crafts.component', './craftdetail.component', './about.component', './contact.component', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, craft_service_1, home_component_1, crafts_component_1, craftdetail_component_1, about_component_1, contact_component_1, ng2_bootstrap_1;
    var AppComponent;
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
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (crafts_component_1_1) {
                crafts_component_1 = crafts_component_1_1;
            },
            function (craftdetail_component_1_1) {
                craftdetail_component_1 = craftdetail_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Luz Threads';
                    this.isCollapsed = true;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'luzthreads',
                        template: "\n\t<nav class=\"navbar navbar-fixed-top navbar-dark\">\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['Home']\">Luz Threads</a>\n\t\t<button class=\"navbar-toggler hidden-sm-up pull-xs-right\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\">&#9776;</button>\n\t\t<div class=\"collapse navbar-toggleable-xs pull-xs-left\" [collapse]=\"isCollapsed\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['Home']\">Home</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['Crafts']\">Portfolio</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['About']\">About</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['Contact']\">Contact</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\t<div id=\"toppad\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t\t<div class=\"container\">\n\t\t<div class=\"row\">\n    <footer class=\"footer\">&copy; Luz Threads 2016 - <a href=\"mailto:Luz@LuzThreads.com\">Luz@LuzThreads.com</a></footer>\n\t\t</div>\n\t\t</div>\n\t\t\n  ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.CollapseDirective],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, craft_service_1.CraftService]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/crafts',
                            name: 'Crafts',
                            component: crafts_component_1.CraftsComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'CraftDetail',
                            component: craftdetail_component_1.CraftDetailComponent
                        },
                        {
                            path: '/about',
                            name: 'About',
                            component: about_component_1.AboutComponent
                        },
                        {
                            path: '/contact',
                            name: 'Contact',
                            component: contact_component_1.ContactComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2RUE7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFHLGFBQWEsQ0FBQztvQkFDaEIsZ0JBQVcsR0FBVyxJQUFJLENBQUM7Z0JBQ25DLENBQUM7Z0JBckVEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSwycUNBOEJUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHFDQUFpQixFQUFFLGlDQUFpQixDQUFDO3dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSw0QkFBWSxDQUFDO3FCQUM1QyxDQUFDO29CQUVELCtCQUFXLENBQUM7d0JBQ1o7NEJBQ0MsSUFBSSxFQUFFLE9BQU87NEJBQ2IsSUFBSSxFQUFFLE1BQU07NEJBQ1osU0FBUyxFQUFFLDhCQUFhOzRCQUN4QixZQUFZLEVBQUUsSUFBSTt5QkFDbEI7d0JBQ0Q7NEJBQ0MsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsU0FBUyxFQUFFLGtDQUFlO3lCQUMxQjt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsYUFBYTs0QkFDbkIsSUFBSSxFQUFFLGFBQWE7NEJBQ25CLFNBQVMsRUFBRSw0Q0FBb0I7eUJBQy9CO3dCQUNEOzRCQUNDLElBQUksRUFBRSxRQUFROzRCQUNkLElBQUksRUFBRSxPQUFPOzRCQUNiLFNBQVMsRUFBRSxnQ0FBYzt5QkFDekI7d0JBQ0Q7NEJBQ0MsSUFBSSxFQUFFLFVBQVU7NEJBQ2hCLElBQUksRUFBRSxTQUFTOzRCQUNmLFNBQVMsRUFBRSxvQ0FBZ0I7eUJBQzNCO3FCQUNELENBQUM7O2dDQUFBO2dCQUtGLG1CQUFDO1lBQUQsQ0FBQyxBQUhELElBR0M7WUFIRCx1Q0FHQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHsgQ3JhZnRTZXJ2aWNlIH0gICAgIGZyb20gJy4vY3JhZnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3JhZnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jcmFmdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3JhZnREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NyYWZ0ZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbGxhcHNlRGlyZWN0aXZlLCBOZzJCb290c3RyYXBDb25maWcgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsdXp0aHJlYWRzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG5cdDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWZpeGVkLXRvcCBuYXZiYXItZGFya1wiPlxyXG5cdFx0PGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBbcm91dGVyTGlua109XCJbJ0hvbWUnXVwiPkx1eiBUaHJlYWRzPC9hPlxyXG5cdFx0PGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGhpZGRlbi1zbS11cCBwdWxsLXhzLXJpZ2h0XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFwiPiYjOTc3Njs8L2J1dHRvbj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItdG9nZ2xlYWJsZS14cyBwdWxsLXhzLWxlZnRcIiBbY29sbGFwc2VdPVwiaXNDb2xsYXBzZWRcIj5cclxuXHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdCAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnSG9tZSddXCI+SG9tZTwvYT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0ICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgW3JvdXRlckxpbmtdPVwiWydDcmFmdHMnXVwiPlBvcnRmb2xpbzwvYT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0ICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgW3JvdXRlckxpbmtdPVwiWydBYm91dCddXCI+QWJvdXQ8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdCAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnQ29udGFjdCddXCI+Q29udGFjdDwvYT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uYXY+XHJcblx0PGRpdiBpZD1cInRvcHBhZFwiPlxyXG5cdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG5cdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPiZjb3B5OyBMdXogVGhyZWFkcyAyMDE2IC0gPGEgaHJlZj1cIm1haWx0bzpMdXpATHV6VGhyZWFkcy5jb21cIj5MdXpATHV6VGhyZWFkcy5jb208L2E+PC9mb290ZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIENvbGxhcHNlRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtST1VURVJfUFJPVklERVJTLCBDcmFmdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG5cdHsgXHJcblx0XHRwYXRoOiAnL2hvbWUnLFxyXG5cdFx0bmFtZTogJ0hvbWUnLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxyXG5cdFx0dXNlQXNEZWZhdWx0OiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2NyYWZ0cycsXHJcblx0XHRuYW1lOiAnQ3JhZnRzJyxcclxuXHRcdGNvbXBvbmVudDogQ3JhZnRzQ29tcG9uZW50XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2RldGFpbC86aWQnLFxyXG5cdFx0bmFtZTogJ0NyYWZ0RGV0YWlsJyxcclxuXHRcdGNvbXBvbmVudDogQ3JhZnREZXRhaWxDb21wb25lbnRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvYWJvdXQnLFxyXG5cdFx0bmFtZTogJ0Fib3V0JyxcclxuXHRcdGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvY29udGFjdCcsXHJcblx0XHRuYW1lOiAnQ29udGFjdCcsXHJcblx0XHRjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnRcclxuXHR9XHJcbl0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICB0aXRsZSA9ICdMdXogVGhyZWFkcyc7XHJcblx0cHVibGljIGlzQ29sbGFwc2VkOmJvb2xlYW4gPSB0cnVlO1xyXG59Il19