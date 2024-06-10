import { Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JeuPageComponent } from './pages/jeu-page/jeu-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'game',
    component: JeuPageComponent,
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
];

