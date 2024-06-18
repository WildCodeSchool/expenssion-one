import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AnecdoticSecretsPageComponent } from './pages/anecdotic-secrets-page/anecdotic-secrets-page.component';
import { PrimordialSecretsPageComponent } from './pages/primordial-secrets-page/primordial-secrets-page.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'inscription',
    component: RegisterPageComponent,
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
    path: 'glossaire/lieux',
    component: LocationPageComponent,
  },
  {
    path: 'glossaire/anecdoticSecrets',
    component: AnecdoticSecretsPageComponent,
  },
  {
    path: 'glossaire/primordialSecrets',
    component: PrimordialSecretsPageComponent,
  },
];

