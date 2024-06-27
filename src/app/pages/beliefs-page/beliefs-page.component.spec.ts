import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeliefsPageComponent } from './beliefs-page.component';

describe('BeliefsPageComponent', () => {
  let component: BeliefsPageComponent;
  let fixture: ComponentFixture<BeliefsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeliefsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeliefsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
