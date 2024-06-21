import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimordialSecretsPageComponent } from './primordial-secrets-page.component';

describe('PrimordialSecretsPageComponent', () => {
  let component: PrimordialSecretsPageComponent;
  let fixture: ComponentFixture<PrimordialSecretsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimordialSecretsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimordialSecretsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
