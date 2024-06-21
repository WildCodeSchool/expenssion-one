import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesLinesComponent } from './directives-lines.component';

describe('DirectivesLinesComponent', () => {
  let component: DirectivesLinesComponent;
  let fixture: ComponentFixture<DirectivesLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesLinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
