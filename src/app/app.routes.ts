import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopupComponent } from './components/pop-up-connexion/pop-up-connexion.component';


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
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'connexion',
    component: PopupComponent,
  }
  // {
  //   path: '*',
  //   component: FooterComponent,
  // },
];

