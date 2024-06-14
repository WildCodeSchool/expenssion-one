import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopupComponent } from './components/pop-up-connexion/pop-up-connexion.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';


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
    path: 'connexion',
    component: PopupComponent,
  }
    path: 'glossaire/classes',
    component: SpecializationPageComponent,
  }, {
    path: 'lieux',
    component: LocationPageComponent,
  }
];

