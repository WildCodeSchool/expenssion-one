import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApiDataService } from './service/api-data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderMobileComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent{

  apiDataService=inject(ApiDataService)
  breakpointObserver = inject(BreakpointObserver)

  ngOnInit() {
    this.breakpointObserver.observe(Object.values(this.breakpoints)).subscribe((state: BreakpointState) => {
      this.isMobile = state.breakpoints[this.breakpoints.mobile];
     
      this.apiDataService.getSpecialization().subscribe(x=>console.log(x))
      title = 'Expenssion One';
      isMobile: boolean = false;
    
      private breakpoints = {
        mobile: '(max-width: 768px)',
    });
  }
}
