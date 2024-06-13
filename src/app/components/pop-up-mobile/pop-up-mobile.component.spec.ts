import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMobileComponent } from './pop-up-mobile.component';

describe('PopUpMobileComponent', () => {
  let component: PopUpMobileComponent;
  let fixture: ComponentFixture<PopUpMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
