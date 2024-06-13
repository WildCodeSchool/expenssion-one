import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpConnexionComponent } from './pop-up-connexion.component';

describe('PopUpConnexionComponent', () => {
  let component: PopUpConnexionComponent;
  let fixture: ComponentFixture<PopUpConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpConnexionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
