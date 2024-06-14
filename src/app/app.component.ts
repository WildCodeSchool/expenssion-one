import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Expenssion One';
  isMobile: boolean = false;



  private breakpoints = {
    mobile: '(max-width: 768px)'
  };


  breakpointObserver = inject(BreakpointObserver)

  ngOnInit() {
    this.breakpointObserver.observe(Object.values(this.breakpoints)).subscribe((state: BreakpointState) => {
      this.isMobile = state.breakpoints[this.breakpoints.mobile]
    });
  }
}
