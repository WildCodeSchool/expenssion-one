import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RaceComponent } from './pages/race/race.component';
import { PopupComponent } from './components/pop-up-connexion/pop-up-connexion.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
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
<<<<<<< HEAD
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full',
  },

  {
    path: 'glossaire/races',
    component: RaceComponent,
  },

=======
  
>>>>>>> 14efe1ba54ff201eff0dc8219ce11f44207e4647
  {
    path: 'connexion',
    component: PopupComponent,
  },
  {
    path: 'glossaire/classes',
    component: SpecializationPageComponent,
<<<<<<< HEAD
  },
=======
  }, 
>>>>>>> 14efe1ba54ff201eff0dc8219ce11f44207e4647
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
<<<<<<< HEAD
=======


>>>>>>> 14efe1ba54ff201eff0dc8219ce11f44207e4647
