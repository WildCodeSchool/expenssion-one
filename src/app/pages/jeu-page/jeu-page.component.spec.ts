import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuPageComponent } from './jeu-page.component';

describe('JeuPageComponent', () => {
  let component: JeuPageComponent;
  let fixture: ComponentFixture<JeuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
