import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


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
  
];

