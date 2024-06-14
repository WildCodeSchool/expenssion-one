import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';

export const routes: Routes = [
  {
    path: 'inscription',
    component: RegisterComponent,
  },

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
    path: 'glossaire/classes',
    component: SpecializationPageComponent,
  }, {
    path: 'lieux',
    component: LocationPageComponent,
  },
];

