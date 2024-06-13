import { Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
// import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocationPageComponent } from './pages/location-page/location-page/location-page.component';
import { RaceComponent } from './pages/race/race/race.component';

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
  {
    path: 'races',
    component: RaceComponent,
  },
  {
    path: 'locations',
    component: LocationPageComponent,
  },
];
