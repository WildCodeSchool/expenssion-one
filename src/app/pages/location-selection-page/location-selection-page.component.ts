import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NortaMapComponent } from '../../components/norta-map/norta-map.component';
import { WorldMapMobileComponent } from '../../components/world-map-mobile/world-map-mobile.component';
import { WorldMapComponent } from '../../components/world-map/world-map.component';
import { PersoServiceService } from '../../service/perso-service.service';

@Component({
  selector: 'app-location-selection-page',
  standalone: true,
  imports: [RouterLink, WorldMapComponent, WorldMapMobileComponent, NortaMapComponent],
  templateUrl: './location-selection-page.component.html',
  styleUrl: './location-selection-page.component.scss'
})
export class LocationSelectionPageComponent {

    isNortaDisplay: boolean | null = null;

    onReceiveIsNortaDisplay(event: boolean): void {
    this.isNortaDisplay=event;
  }

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  private breakpoints = {
    mobile: '(max-width: 768px)',
  }

  breakpointObserver = inject(BreakpointObserver)
  isMobile: boolean = false;

  persoService = inject(PersoServiceService)

  validate()
  {
    this.persoService.isNorta = this.isNortaDisplay;
  }



  ngOnInit() {
    this.breakpointObserver.observe(Object.values(this.breakpoints)).subscribe((state: BreakpointState) => {
      this.isMobile = state.breakpoints[this.breakpoints.mobile]});
  }
}
