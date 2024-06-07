import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatIconModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

}
