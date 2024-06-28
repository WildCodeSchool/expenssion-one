import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCharacterComponent } from './news-character.component';

describe('NewsCharacterComponent', () => {
  let component: NewsCharacterComponent;
  let fixture: ComponentFixture<NewsCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
