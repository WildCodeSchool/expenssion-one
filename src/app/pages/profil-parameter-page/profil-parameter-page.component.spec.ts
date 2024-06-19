import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilParameterPageComponent } from './profil-parameter-page.component';

describe('ProfilParameterPageComponent', () => {
  let component: ProfilParameterPageComponent;
  let fixture: ComponentFixture<ProfilParameterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilParameterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilParameterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
