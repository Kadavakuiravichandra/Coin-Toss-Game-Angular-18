import { Component } from '@angular/core';
import { DestinationComponent } from "./components/destination/destination.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DestinationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
