import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Expenssion One';
  isMobile: boolean = false;


  breakpointObserver = inject(BreakpointObserver)

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
    console.log(this.isMobile)
  }
}
