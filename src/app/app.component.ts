import { Component } from '@angular/core';
import { CoinTossGameComponent } from "./components/coin-toss-game/coin-toss-game.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoinTossGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
