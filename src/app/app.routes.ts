import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
<<<<<<< HEAD
import { RegisterComponent } from './pages/register/register.component';
=======
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';

>>>>>>> 16aa7ff1b95d1fd420dddc087f1bd76ce5742357

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
<<<<<<< HEAD

  // {
  //   path: '*',
  //   component: FooterComponent,
  // },
=======
  {
    path: 'glossaire/classes',
    component: SpecializationPageComponent,
  }, {
    path: 'lieux',
    component: LocationPageComponent,
  },
>>>>>>> 16aa7ff1b95d1fd420dddc087f1bd76ce5742357
];

