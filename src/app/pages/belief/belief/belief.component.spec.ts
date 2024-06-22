import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeliefComponent } from './belief.component';

describe('BeliefComponent', () => {
  let component: BeliefComponent;
  let fixture: ComponentFixture<BeliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeliefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
