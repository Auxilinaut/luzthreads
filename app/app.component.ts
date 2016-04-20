import { Component }       from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { CraftService }     from './craft.service';
import { HomeComponent } from './home.component';
import { CraftsComponent } from './crafts.component';
import { CraftDetailComponent } from './craftdetail.component';
import { Collapse, DROPDOWN_DIRECTIVES, Ng2BootstrapConfig } from 'ng2-bootstrap/ng2-bootstrap';

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
				  <a class="nav-link" href="#">About</a>
				</li>
				<li class="nav-item" href="#">
				  <a class="nav-link hidden-xs-down">Contact</a>
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
	}
])

export class AppComponent {
  title = 'Luz Threads';
}