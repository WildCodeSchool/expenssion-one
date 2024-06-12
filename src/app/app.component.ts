import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PopupComponent } from './components/pop-up-connexion/pop-up-connexion.component';


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
  };


  breakpointObserver = inject(BreakpointObserver)

  ngOnInit() {
    this.breakpointObserver.observe(Object.values(this.breakpoints)).subscribe((state: BreakpointState) => {
      this.isMobile = state.breakpoints[this.breakpoints.mobile];
     
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '254px',
      height: '351px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
