import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesPageComponent } from './classes-page.component';

describe('ClassesPageComponent', () => {
  let component: ClassesPageComponent;
  let fixture: ComponentFixture<ClassesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
