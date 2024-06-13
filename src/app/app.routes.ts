import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopUpMobileComponent } from './components/pop-up-mobile/pop-up-mobile.component';


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
    component: PopUpMobileComponent,
  }
  // {
  //   path: '*',
  //   component: FooterComponent,
  // },
];

