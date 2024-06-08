import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileSideNavService {


  private isOpen = new BehaviorSubject<boolean>(false);
  mobileSideNavIsOpen$ = this.isOpen.asObservable();

  toggle():void {
    this.isOpen.next(!this.isOpen.value);
  }

  close():void {
    this.isOpen.next(false);
  }

  constructor() { }


}
