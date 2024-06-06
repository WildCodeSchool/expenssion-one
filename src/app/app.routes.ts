import { Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
];
