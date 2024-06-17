import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnecdoticSecretsPageComponent } from './anecdotic-secrets-page.component';

describe('AnecdoticSecretsPageComponent', () => {
  let component: AnecdoticSecretsPageComponent;
  let fixture: ComponentFixture<AnecdoticSecretsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnecdoticSecretsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnecdoticSecretsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
