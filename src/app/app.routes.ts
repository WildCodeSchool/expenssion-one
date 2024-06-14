import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';

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

  // {
  //   path: '*',
  //   component: FooterComponent,
  // },
];

