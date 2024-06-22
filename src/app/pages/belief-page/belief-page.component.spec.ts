import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeliefPageComponent } from './belief-page.component';

describe('BeliefPageComponent', () => {
  let component: BeliefPageComponent;
  let fixture: ComponentFixture<BeliefPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeliefPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeliefPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
