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
var home_component_1 = require('./home.component');
var crafts_component_1 = require('./crafts.component');
var craftdetail_component_1 = require('./craftdetail.component');
var about_component_1 = require('./about.component');
var contact_component_1 = require('./contact.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Luz Threads';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'luzthreads',
            template: "\n\t<nav class=\"navbar navbar-fixed-top navbar-dark\" style=\"background-color:#9b6bcc;\">\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['Home']\">Luz Threads</a>\n\t\t<button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapser\">&#9776;</button>\n\t\t<div class=\"collapse navbar-toggleable-xs\" id=\"collapser\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['Home']\">Home</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['Crafts']\">Portfolio</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" [routerLink]=\"['About']\">About</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link hidden-xs-down\" [routerLink]=\"['Contact']\">Contact</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\t<div id=\"toppad\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t\t<div class=\"container\">\n\t\t<div class=\"row\">\n    <footer class=\"footer\">&copy; Luz Threads 2016</footer>\n\t\t</div>\n\t\t</div>\n\t\t\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
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
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map