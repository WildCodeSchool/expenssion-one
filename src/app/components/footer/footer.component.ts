import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
//préparer les routerLink et renvoyer sur la page d'accueil avec *
