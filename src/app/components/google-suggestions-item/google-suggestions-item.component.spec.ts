import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSuggestionsItemComponent } from './google-suggestions-item.component';

describe('GoogleSuggestionsItemComponent', () => {
  let component: GoogleSuggestionsItemComponent;
  let fixture: ComponentFixture<GoogleSuggestionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSuggestionsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSuggestionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
