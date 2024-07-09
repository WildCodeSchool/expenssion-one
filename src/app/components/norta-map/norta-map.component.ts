import { Component, inject } from '@angular/core';
import { ApiDataService } from '../../service/api-data.service';
import { City } from '../../model/city/city';

@Component({
  selector: 'app-norta-map',
  standalone: true,
  imports: [],
  templateUrl: './norta-map.component.html',
  styleUrl: './norta-map.component.scss'
})
export class NortaMapComponent {

  apiDataService: ApiDataService = inject(ApiDataService);
  cities: City[] = [];

  constructor() {}

  ngOnInit(): void {
    this.apiDataService.getCities().subscribe((data) => this.cities = data)
  }

  portax: boolean = false;
  mayere: boolean = false;
  quarnicor: boolean = false;
  balumin: boolean = false;
  syras: boolean = false;
  tolmesa: boolean = false;
  nasram: boolean = false;
  uhne: boolean = false;
  mortaru: boolean = false;
  tamur: boolean = false;
  rotam: boolean = false;
  iacchus: boolean = false;
  falas: boolean = false;
  rolmoll: boolean = false;
  malequo: boolean = false;
  roemul: boolean = false;
  arguerar: boolean = false;
  navago: boolean = false;
  tarsseno: boolean = false;
  etalia: boolean = false;
  rastual: boolean = false;
  ostior: boolean = false;
  ostal: boolean = false;
  sarnen: boolean = false;
  halmi: boolean = false;
  talath: boolean = false;
  fanolox: boolean = false;
  taurmon: boolean = false;
  oroduis: boolean = false;
  laCelestale: boolean = false;
  alett: boolean = false;
  noctia: boolean = false;
  sinatre: boolean = false;
  anguerra: boolean = false;
  palormos: boolean = false;
  dornett: boolean = false;
  ralafax: boolean = false;
  arnir: boolean = false;
  mal: boolean = false;
  noctura: boolean = false;
  holmer: boolean = false;
  tripinnath: boolean = false;
  ladminas: boolean = false;
  nortir: boolean = false;
  pyra: boolean = false;
  tovat: boolean = false;
  leRempart: boolean = false;
  neleyn: boolean = false;
  toffal: boolean = false;
  norshan: boolean = false;
  polax: boolean = false;
  tolered: boolean = false;
  ereden: boolean = false;
  dwaria: boolean = false;
  umere: boolean = false;
  lunaris: boolean = false;
  arnorea: boolean = false;
  rim: boolean = false;
  udrof: boolean = false;
  laBaieDesMorts: boolean = false;
  urdan: boolean = false;
  tyrna: boolean = false;
  rafmen: boolean = false;
  tirifa: boolean = false;
  malto: boolean = false;
  runa: boolean = false;
  infigar: boolean = false;
  polymes: boolean = false;
  talkoss: boolean = false;
  alarya: boolean = false;
  elia: boolean = false;
  orodia: boolean = false;
  balaelle: boolean = false;
  thax: boolean = false;
  meler: boolean = false;
  excala: boolean = false;
  reyes: boolean = false;
  illot: boolean = false;
  nalos: boolean = false;
  thaurlad: boolean = false;
  finarys: boolean = false;
  ducaria: boolean = false;

  isClickedPortax: boolean = false;
  isClickedMayere: boolean = false;
  isClickedQuarnicor: boolean = false;
  isClickedBalumin: boolean = false;
  isClickedSyras: boolean = false;
  isClickedTolmesa: boolean = false;
  isClickedNasram: boolean = false;
  isClickedUhne: boolean = false;
  isClickedMortaru: boolean = false;
  isClickedTamur: boolean = false;
  isClickedRotam: boolean = false;
  isClickedIacchus: boolean = false;
  isClickedFalas: boolean = false;
  isClickedRolmoll: boolean = false;
  isClickedMalequo: boolean = false;
  isClickedRoemul: boolean = false;
  isClickedArguerar: boolean = false;
  isClickedNavago: boolean = false;
  isClickedTarsseno: boolean = false;
  isClickedEtalia: boolean = false;
  isClickedRastual: boolean = false;
  isClickedOstior: boolean = false;
  isClickedOstal: boolean = false;
  isClickedSarnen: boolean = false;
  isClickedHalmi: boolean = false;
  isClickedTalath: boolean = false;
  isClickedFanolox: boolean = false;
  isClickedTaurmon: boolean = false;
  isClickedOroduis: boolean = false;
  isClickedLaCelestale: boolean = false;
  isClickedAlett: boolean = false;
  isClickedNoctia: boolean = false;
  isClickedSinatre: boolean = false;
  isClickedAnguerra: boolean = false;
  isClickedPalormos: boolean = false;
  isClickedDornett: boolean = false;
  isClickedRalafax: boolean = false;
  isClickedArnir: boolean = false;
  isClickedMal: boolean = false;
  isClickedNoctura: boolean = false;
  isClickedHolmer: boolean = false;
  isClickedTripinnath: boolean = false;
  isClickedLadminas: boolean = false;
  isClickedNortir: boolean = false;
  isClickedPyra: boolean = false;
  isClickedTovat: boolean = false;
  isClickedLeRempart: boolean = false;
  isClickedNeleyn: boolean = false;
  isClickedToffal: boolean = false;
  isClickedNorshan: boolean = false;
  isClickedPolax: boolean = false;
  isClickedTolered: boolean = false;
  isClickedEreden: boolean = false;
  isClickedDwaria: boolean = false;
  isClickedUmere: boolean = false;
  isClickedLunaris: boolean = false;
  isClickedArnorea: boolean = false;
  isClickedRim: boolean = false;
  isClickedUdrof: boolean = false;
  isClickedLaBaieDesMorts: boolean = false;
  isClickedUrdan: boolean = false;
  isClickedTyrna: boolean = false;
  isClickedRafmen: boolean = false;
  isClickedTirifa: boolean = false;
  isClickedMalto: boolean = false;
  isClickedRuna: boolean = false;
  isClickedInfigar: boolean = false;
  isClickedPolymes: boolean = false;
  isClickedTalkoss: boolean = false;
  isClickedAlarya: boolean = false;
  isClickedElia: boolean = false;
  isClickedOrodia: boolean = false;
  isClickedBalaelle: boolean = false;
  isClickedThax: boolean = false;
  isClickedMeler: boolean = false;
  isClickedExcala: boolean = false;
  isClickedReyes: boolean = false;
  isClickedIllot: boolean = false;
  isClickedNalos: boolean = false;
  isClickedThaurlad: boolean = false;
  isClickedFinarys: boolean = false;
  isClickedDucaria: boolean = false;
  
  onMouseEnterNorta(): void {
    if(!this.isClickedNorta) {
      this.norta = true;
      this.nelm = false;
    }
  }

  onMouseLeaveNorta(): void {
    if(!this.isClickedNorta && !this.isClickedNelm) {
    this.norta = false;
    }
    if(this.isClickedNelm && !this.isClickedNorta){
      this.nelm = true;
      this.norta = false;
    }
  }

  onMouseEnterNelm(): void {
    if(!this.isClickedNelm) {
    this.nelm = true;
    this.norta = false;
    }
  }

  onMouseLeaveNelm(): void {
    if(!this.isClickedNelm && !this.isClickedNorta) {
    this.nelm = false;
    }
    if(this.isClickedNorta && !this.isClickedNelm){
      this.norta = true;
      this.nelm = false;
    }
  }

  onClickNorta(): void {
    this.isClickedNorta = true;
    this.norta = true;
    this.isClickedNelm = false;
    this.nelm = false;
  }

  onClickNelm(): void {
    this.isClickedNelm = true;
    this.nelm = true;
    this.isClickedNorta = false;
    this.norta = false;
  }
}
