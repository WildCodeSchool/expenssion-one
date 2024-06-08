import { Component, inject } from '@angular/core';
import { MobileSideNavService } from '../../service/mobile-sidenav.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  mobileSidenavService=inject(MobileSideNavService)
  isMobileSidenavOpen$:Observable<boolean>=this.mobileSidenavService.mobileSideNavIsOpen$

}
