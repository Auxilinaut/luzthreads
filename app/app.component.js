System.register(['angular2/core', 'angular2/router', './craft.service', './home.component', './crafts.component', './craftdetail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, craft_service_1, home_component_1, crafts_component_1, craftdetail_component_1;
    var AppComponent;
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
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (crafts_component_1_1) {
                crafts_component_1 = crafts_component_1_1;
            },
            function (craftdetail_component_1_1) {
                craftdetail_component_1 = craftdetail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Luz Threads';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'luzthreads',
                        template: "\n\t<nav class=\"navbar navbar-fixed-top navbar-dark\" style=\"background-color:#9b6bcc;\">\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['Home']\">Luz Threads</a>\n\t\t<button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapser\">&#9776;</button>\n\t\t<div class=\"collapse navbar-toggleable-xs\" id=\"collapser\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['Home']\">Home</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['Crafts']\">Portfolio</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">About</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\" href=\"#\">\n\t\t\t\t  <a class=\"nav-link hidden-xs-down\">Contact</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\t<div id=\"toppad\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n    <footer class=\"footer\">\n\t\t<div class=\"container\">&copy; Luz Threads 2016</div>\n\t</footer>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, craft_service_1.CraftService]
                    }),
                    router_1.RouteConfig([
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
//# sourceMappingURL=app.component.js.map