import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RaceComponent } from './pages/race/race.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  {
    path: 'accueil',
    component: HomePageComponent,
  },
  {
    path: 'inscription',
    component: RegisterPageComponent,
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full',
  },

  {
    path: 'races',
    component: RaceComponent,
  },

  { path: 'glossaire/classes', component: SpecializationPageComponent },
  {
    path: 'glossaire/lieux',
    component: LocationPageComponent,
  },
];
