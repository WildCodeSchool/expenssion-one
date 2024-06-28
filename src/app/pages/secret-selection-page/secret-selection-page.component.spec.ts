import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretSelectionPageComponent } from './secret-selection-page.component';

describe('SecretSelectionPageComponent', () => {
  let component: SecretSelectionPageComponent;
  let fixture: ComponentFixture<SecretSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretSelectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
