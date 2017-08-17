import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CraftsComponent } from '../crafts/crafts.component';
import { CraftDetailComponent } from '../craft-detail/craft-detail.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { 
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'crafts',
		component: CraftsComponent
	},
	{
		path: 'crafts/:slug',
		component: CraftDetailComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
