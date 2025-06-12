import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalsAppComponent } from './capitals-app.component';

describe('CapitalsAppComponent', () => {
  let component: CapitalsAppComponent;
  let fixture: ComponentFixture<CapitalsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalsAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
