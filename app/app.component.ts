import { Component } from '@angular/core';

@Component({
  selector: 'luzthreads',
  template: `
	<nav class="navbar navbar-dark">
		<div class="container">
			<a class="navbar-brand" routerLink="/home">Luz Threads</a>
			<!--<button class="navbar-toggler hidden-sm-up pull-xs-right" type="button" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="collapser">&#9776;</button>-->
			<div id="collapser" class="pull-xs-left">
				<ul class="nav navbar-nav">
					<li class="nav-item">
						<a class="nav-link" routerLink="/home" routerLinkActive="active">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" routerLink="/crafts" routerLinkActive="active">Portfolio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<div id="toppad">
		<router-outlet></router-outlet>
	</div>
	<footer class="footer"><div class="container">&copy; Luz Threads 2017 - <a routerLink="/contact">Contact Me</a></div></footer>
  `
})

export class AppComponent {
	title = 'Luz Threads';
	private isCollapsed = false;
}

