import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderMobileComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class AppComponent {
  title = 'Expenssion One';
  private breakpoints = {
    mobile: '(max-width: 768px)',
  }

  breakpointObserver = inject(BreakpointObserver)
  isMobile: boolean = false;

  ngOnInit() {
    this.breakpointObserver.observe(Object.values(this.breakpoints)).subscribe((state: BreakpointState) => {
      this.isMobile = state.breakpoints[this.breakpoints.mobile];

    });
  }

}
