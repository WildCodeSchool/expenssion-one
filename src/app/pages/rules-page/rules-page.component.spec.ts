import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesPageComponent } from './rules-page.component';

describe('RulesPageComponent', () => {
  let component: RulesPageComponent;
  let fixture: ComponentFixture<RulesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RulesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
