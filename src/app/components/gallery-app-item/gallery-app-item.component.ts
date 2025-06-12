import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryItem } from '../../model/gallery-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-app-item.component.html',
  styleUrl: './gallery-app-item.component.css',
})
export class GalleryAppItemComponent {
  @Input() galleryThumbnails!: GalleryItem;
  @Input() activeThumbnail!: GalleryItem;
  @Output() selectedThumbnail = new EventEmitter<GalleryItem>();

  onChangeSelectedThumbnail(value: GalleryItem): void {
    this.selectedThumbnail.emit(value);
  }
}
