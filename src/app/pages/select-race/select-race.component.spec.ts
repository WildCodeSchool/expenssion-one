import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRaceComponent } from './select-race.component';

describe('SelectRaceComponent', () => {
  let component: SelectRaceComponent;
  let fixture: ComponentFixture<SelectRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectRaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
