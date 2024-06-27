import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RaceComponent } from './pages/race/race.component';

import { LocationPageComponent } from './pages/location-page/location-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserProfilPageComponent } from './pages/user-profil-page/user-profil-page.component';
import { AuthenticationGuard } from './guards/authentification.guard';
import { ProfilParameterPageComponent } from './pages/profil-parameter-page/profil-parameter-page.component';
import { SecretsPageComponent } from './pages/secrets-page/secrets-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { BeliefsPageComponent } from './pages/beliefs-page/beliefs-page.component';

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
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'regles',
    component: RulesPageComponent,
  },
  {
    path: 'glossaire/races',
    component: RaceComponent,
  },
  {
    path: 'glossaire/classes',
    component: SpecializationPageComponent,
  },
  {
    path: 'glossaire/secrets',
    component: SecretsPageComponent,
  },
  {
    path: 'glossaire/lieux',
    component: LocationPageComponent,
  },
  {
    path: 'glossaire/croyances',
    component: BeliefsPageComponent,
  },
  {
    path: 'news',
    component: NewsPageComponent,
  },
  {
    path: 'profil',
    component: UserProfilPageComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'profil/parametres',
    component: ProfilParameterPageComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'news',
    component: NewsPageComponent,
  },
  {
    path: '**',
    redirectTo: 'acceuil',
    pathMatch: 'full',
  },
];
