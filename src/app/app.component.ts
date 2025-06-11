import { Component } from '@angular/core';
import { GoogleComponent } from "./components/google/google.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoogleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
