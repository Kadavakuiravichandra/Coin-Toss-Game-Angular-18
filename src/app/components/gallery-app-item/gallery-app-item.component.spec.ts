import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAppItemComponent } from './gallery-app-item.component';

describe('GalleryAppItemComponent', () => {
  let component: GalleryAppItemComponent;
  let fixture: ComponentFixture<GalleryAppItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryAppItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryAppItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
