import { Component } from '@angular/core';
import { GalleryAppComponent } from "./components/gallery-app/gallery-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
