// src/app/multipage/multipage.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const multipageRoutes: Routes = [
  { path: 'multipage/home', component: HomeComponent },
  { path: 'multipage/about', component: AboutComponent },
  { path: 'multipage', redirectTo: 'multipage/home', pathMatch: 'full' },
  { path: 'multipage/**', component: NotFoundComponent }
];
