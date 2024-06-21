import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopupComponent } from './components/pop-up-connexion/pop-up-connexion.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserProfilPageComponent } from './pages/user-profil-page/user-profil-page.component';
import { AuthenticationGuard } from './guards/authentification.guard';
import { ProfilParameterPageComponent } from './pages/profil-parameter-page/profil-parameter-page.component';


export const routes: Routes = [
  {
    path: 'accueil',
    component: HomePageComponent,
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
  {
    path: 'profil',
    component: UserProfilPageComponent,canActivate:[AuthenticationGuard],
  },
    {
    path: 'profil/parametres',
    component: ProfilParameterPageComponent,canActivate:[AuthenticationGuard],
  },
  {
    path: '**',
    redirectTo: 'acceuil',
    pathMatch: 'full',
  },
];

