import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapMobileComponent } from './world-map-mobile.component';

describe('WorldMapMobileComponent', () => {
  let component: WorldMapMobileComponent;
  let fixture: ComponentFixture<WorldMapMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldMapMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldMapMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
