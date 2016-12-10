import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, ResetpassComponent } from './auth.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'password-reset', component: ResetpassComponent }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
