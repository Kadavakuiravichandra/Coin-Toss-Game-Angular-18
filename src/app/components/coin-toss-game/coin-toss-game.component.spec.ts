import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTossGameComponent } from './coin-toss-game.component';

describe('CoinTossGameComponent', () => {
  let component: CoinTossGameComponent;
  let fixture: ComponentFixture<CoinTossGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinTossGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinTossGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
