import { Component } from '@angular/core';
import { GalleryItem } from '../../model/gallery-model';
import { GalleryAppItemComponent } from '../gallery-app-item/gallery-app-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-app',
  standalone: true,
  imports: [GalleryAppItemComponent, CommonModule],
  templateUrl: './gallery-app.component.html',
  styleUrl: './gallery-app.component.css',
})
export class GalleryAppComponent {
  imagesList: GalleryItem[] = [
    {
      id: 0,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
      imageAltText: 'nature mountain with pond',
      thumbnailAltText: 'nature mountain with pond thumbnail',
    },
    {
      id: 1,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
      imageAltText: 'nature sunset',
      thumbnailAltText: 'nature sunset thumbnail',
    },
    {
      id: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
      imageAltText: 'nature mountain with ocean',
      thumbnailAltText: 'nature mountain with ocean thumbnail',
    },
    {
      id: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
      imageAltText: 'nature mountain with forest',
      thumbnailAltText: 'nature mountain with forest thumbnail',
    },
    {
      id: 4,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
      imageAltText: 'nature leaves',
      thumbnailAltText: 'nature leaves thumbnail',
    },
    {
      id: 5,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
      imageAltText: 'nature tree',
      thumbnailAltText: 'nature tree thumbnail',
    },
    {
      id: 6,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
      imageAltText: 'nature waterfall',
      thumbnailAltText: 'nature waterfall thumbnail',
    },
    {
      id: 7,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
      imageAltText: 'nature river',
      thumbnailAltText: 'nature river thumbnail',
    },
  ];

  initialGalleryItem: GalleryItem = this.imagesList[0];

  onSetThumbnail(value: GalleryItem): void {
    this.initialGalleryItem = value;
  }
}
