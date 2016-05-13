import { Component }       from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { CraftService }     from './craft.service';
import { HomeComponent } from './home.component';
import { CraftsComponent } from './crafts.component';
import { CraftDetailComponent } from './craftdetail.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { CollapseDirective, DROPDOWN_DIRECTIVES, Ng2BootstrapConfig } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'luzthreads',
  template: `
	<nav class="navbar navbar-fixed-top navbar-dark" style="background-color:#9b6bcc;">
		<a class="navbar-brand" [routerLink]="['Home']">Luz Threads</a>
		<button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapser">&#9776;</button>
		<div class="collapse navbar-toggleable-xs" id="collapser">
			<ul class="nav navbar-nav">
				<li class="nav-item">
				  <a class="nav-link" [routerLink]="['Home']">Home</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" [routerLink]="['Crafts']">Portfolio</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" [routerLink]="['About']">About</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link hidden-xs-down" [routerLink]="['Contact']">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
	<div id="toppad">
		<router-outlet></router-outlet>
	</div>
    <footer class="footer">
		<div class="container">&copy; Luz Threads 2016</div>
	</footer>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, CraftService]
})

@RouteConfig([
	{ 
		path: '/home',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true
	},
	{
		path: '/crafts',
		name: 'Crafts',
		component: CraftsComponent
	},
	{
		path: '/detail/:id',
		name: 'CraftDetail',
		component: CraftDetailComponent
	},
	{
		path: '/about',
		name: 'About',
		component: AboutComponent
	},
	{
		path: '/contact',
		name: 'Contact',
		component: ContactComponent
	}
])

export class AppComponent {
  title = 'Luz Threads';
}