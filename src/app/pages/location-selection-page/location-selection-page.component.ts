import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorldMapComponent } from '../../components/world-map/world-map.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { WorldMapMobileComponent } from '../../components/world-map-mobile/world-map-mobile.component';
import { NortaMapComponent } from '../../components/norta-map/norta-map.component';

@Component({
  selector: 'app-location-selection-page',
  standalone: true,
  imports: [RouterLink, WorldMapComponent, WorldMapMobileComponent, NortaMapComponent],
  templateUrl: './location-selection-page.component.html',
  styleUrl: './location-selection-page.component.scss'
})
export class LocationSelectionPageComponent {

  showNortaMap: boolean = false;

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  selectNorta() {
    this.showNortaMap = true;
  }

  private breakpoints = {
    mobile: '(max-width: 768px)',
  }

  breakpointObserver = inject(BreakpointObserver)
  isMobile: boolean = false;
  

  ngOnInit() {
    this.breakpointObserver.observe(Object.values(this.breakpoints)).subscribe((state: BreakpointState) => {
      this.isMobile = state.breakpoints[this.breakpoints.mobile]});
  }
}
