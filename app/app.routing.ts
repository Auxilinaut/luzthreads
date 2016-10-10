import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CraftsComponent } from './crafts.component';
import { CraftDetailComponent } from './craftdetail.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { CraftEditComponent } from './craftedit.component';

const appRoutes: Routes = [
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
		path: 'detail/:id',
		component: CraftDetailComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: 'craftedit',
		component: CraftEditComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);