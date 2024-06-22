import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RaceComponent } from './pages/race/race.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserProfilPageComponent } from './pages/user-profil-page/user-profil-page.component';
import { AuthenticationGuard } from './guards/authentification.guard';
import { ProfilParameterPageComponent } from './pages/profil-parameter-page/profil-parameter-page.component';
import { PrimordialSecretsPageComponent } from './pages/primordial-secrets-page/primordial-secrets-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { BeliefPageComponent } from './pages/belief-page/belief-page.component';


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
    path: 'glossaire/races',
    component: RaceComponent,
  },
  {
    path: 'glossaire/classes',
    component: SpecializationPageComponent,
  }, 
  {

    path: 'glossaire/lieux',
    component: LocationPageComponent,
  },
    {
    path: 'glossaire/secrets',
    component: PrimordialSecretsPageComponent,
  },
  {
    path: 'glossaire/croyances',
    component: BeliefPageComponent,
  },
  { 
    path: 'news', 
    component: NewsPageComponent 
  },

  {
    path: 'regles',
    component: RulesPageComponent,
  },
  {
    path: 'profil',
    component: UserProfilPageComponent,canActivate:[AuthenticationGuard],
  },
    {
    path: 'profil/parametres',
    component: ProfilParameterPageComponent,canActivate:[AuthenticationGuard],
  },
   { 
    path: 'news', component: NewsPageComponent 
  },
  {
    path: '**',
    redirectTo: 'acceuil',
    pathMatch: 'full',
  },
];
  
  
 
 

  

