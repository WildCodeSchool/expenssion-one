import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationPageComponent } from './specialization-page.component';

describe('SpecializationPageComponent', () => {
  let component: SpecializationPageComponent;
  let fixture: ComponentFixture<SpecializationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecializationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecializationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
