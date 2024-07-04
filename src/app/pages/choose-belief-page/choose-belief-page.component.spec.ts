import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBeliefPageComponent } from './choose-belief-page.component';

describe('ChooseBeliefPageComponent', () => {
  let component: ChooseBeliefPageComponent;
  let fixture: ComponentFixture<ChooseBeliefPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseBeliefPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseBeliefPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
