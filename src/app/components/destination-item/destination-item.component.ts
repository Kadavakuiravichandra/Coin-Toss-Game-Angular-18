import { Component, Input } from '@angular/core';
import { Destination } from '../../model/destination-model';

@Component({
  selector: 'app-destination-item',
  standalone: true,
  imports: [],
  templateUrl: './destination-item.component.html',
  styleUrl: './destination-item.component.css',
})
export class DestinationItemComponent {
  @Input() destinationData!: Destination;
}
