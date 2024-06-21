import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RaceComponent } from './pages/race/race.component';
import { PopupComponent } from './components/pop-up-connexion/pop-up-connexion.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';

export const routes: Routes = [
  {
    path: 'accueil',
    component: HomePageComponent,
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full',
  },
  {
    path: 'inscription',
    component: RegisterPageComponent,
  },
  {
    path: 'glossaire/races',
    component: RaceComponent,
  },
  {
    path: 'connexion',
    component: PopupComponent,
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
    path: 'news', 
    component: NewsPageComponent 
  },
  {
    path: 'regles',
    component: RulesPageComponent,
  }
];
