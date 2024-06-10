import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderMobileComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Expenssion One';
  isMobile: boolean = false;

  private breakpoints = {
    mobile: '(max-width: 768px)',
    small: '(min-width: 600px) and (max-width: 959px)',
    medium: '(min-width: 960px) and (max-width: 1279px)',
    large: '(min-width: 1280px)'
  };


  breakpointObserver = inject(BreakpointObserver)

  ngOnInit() {
    this.breakpointObserver.observe(Object.values(this.breakpoints)).subscribe((state: BreakpointState) => {
      this.isMobile = state.breakpoints[this.breakpoints.mobile];
     
    });
  }
}
