import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  isMobileSideNavOpen:boolean=false

  toggle(){
    this.isMobileSideNavOpen=!this.isMobileSideNavOpen;

  }

}
