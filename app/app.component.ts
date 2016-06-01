import { Component }       from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { CraftService }     from './craft.service';
import { HomeComponent } from './home.component';
import { CraftsComponent } from './crafts.component';
import { CraftDetailComponent } from './craftdetail.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { CollapseDirective, Ng2BootstrapConfig } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'luzthreads',
  template: `
	<nav class="navbar navbar-fixed-top navbar-dark">
		<a class="navbar-brand" [routerLink]="['Home']">Luz Threads</a>
		<button class="navbar-toggler hidden-sm-up pull-xs-right" type="button" (click)="isCollapsed = !isCollapsed">&#9776;</button>
		<div class="collapse navbar-toggleable-xs pull-xs-left" [collapse]="isCollapsed">
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
				  <a class="nav-link" [routerLink]="['Contact']">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
	<div id="toppad">
		<router-outlet></router-outlet>
	</div>
		<div class="container">
		<div class="row">
    <footer class="footer">&copy; Luz Threads 2016 - <a href="mailto:Luz@LuzThreads.com">Luz@LuzThreads.com</a></footer>
		</div>
		</div>
		
  `,
  directives: [ROUTER_DIRECTIVES, CollapseDirective],
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
	public isCollapsed:boolean = true;
}