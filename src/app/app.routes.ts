import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopupComponent } from './components/pop-up-connexion/pop-up-connexion.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';


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
    path: 'connexion',
    component: PopupComponent
  },
  {
    path: 'glossaire/classes',
    component: SpecializationPageComponent,
  }, 
  {
    path: 'glossaire/lieux',
    component: LocationPageComponent,
  },
  
  { path: 'news', component: NewsPageComponent },
  { 
    path: 'news', 
    component: NewsPageComponent 
  },

  ];



