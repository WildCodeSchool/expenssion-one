import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretsPageComponent } from './secrets-page.component';

describe('PrimordialSecretsPageComponent', () => {
  let component: SecretsPageComponent;
  let fixture: ComponentFixture<SecretsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
