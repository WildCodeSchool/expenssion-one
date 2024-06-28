import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainStatePageDesktopComponent } from './explain-state-page-desktop.component';

describe('ExplainStatePageDesktopComponent', () => {
  let component: ExplainStatePageDesktopComponent;
  let fixture: ComponentFixture<ExplainStatePageDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplainStatePageDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplainStatePageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
