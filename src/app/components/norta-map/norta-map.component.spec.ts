import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NortaMapComponent } from './norta-map.component';

describe('NortaMapComponent', () => {
  let component: NortaMapComponent;
  let fixture: ComponentFixture<NortaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NortaMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NortaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
