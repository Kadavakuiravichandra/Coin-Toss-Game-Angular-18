import { Component } from '@angular/core';
import { CapitalsAppComponent } from "./components/capitals-app/capitals-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CapitalsAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
