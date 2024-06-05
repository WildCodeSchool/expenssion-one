import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossairePageComponent } from './glossaire-page.component';

describe('GlossairePageComponent', () => {
  let component: GlossairePageComponent;
  let fixture: ComponentFixture<GlossairePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlossairePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlossairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
