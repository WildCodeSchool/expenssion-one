import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatIconModule, CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  isMobileSidenavOpen:boolean=false

  toogle(){
    this.isMobileSidenavOpen=!this.isMobileSidenavOpen;

  }

}
