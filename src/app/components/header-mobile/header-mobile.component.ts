import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MobileSideNavService } from '../../service/mobile-sidenav.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatIconModule, CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  
  mobileSidenavService= inject(MobileSideNavService)
  isMobileSidenavOpen$ :Observable<boolean>=this.mobileSidenavService.mobileSideNavIsOpen$

  toogle(){
    this.mobileSidenavService.toggle()

  }

}
