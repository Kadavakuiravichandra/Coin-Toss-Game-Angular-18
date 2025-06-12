import { Component } from '@angular/core';

@Component({
  selector: 'app-coin-toss-game',
  standalone: true,
  imports: [],
  templateUrl: './coin-toss-game.component.html',
  styleUrl: './coin-toss-game.component.css',
})
export class CoinTossGameComponent {
  initialImg: string = 'https://assets.ccbp.in/frontend/react-js/heads-img.png';
  totalCount: number = 0;
  totalHeads: number = 0;
  totalTails: number = 0;

  onClickGameStarts(): void {
    const tossResults: number = Math.floor(Math.random() * 2);
    console.log(tossResults);
    console.log(Math.ceil(Math.random() * 2));

    if (tossResults === 0) {
      this.initialImg =
        'https://assets.ccbp.in/frontend/react-js/heads-img.png';
      this.totalHeads++;
      this.totalCount++;
    } else {
      this.initialImg =
        'https://assets.ccbp.in/frontend/react-js/tails-img.png';
      this.totalTails++;
      this.totalCount++;
    }
  }
}
