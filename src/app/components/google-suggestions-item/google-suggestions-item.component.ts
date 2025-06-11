import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GoogleSuggestion } from '../../model/google-suggestion-model';

@Component({
  selector: 'app-google-suggestions-item',
  standalone: true,
  imports: [],
  templateUrl: './google-suggestions-item.component.html',
  styleUrl: './google-suggestions-item.component.css',
})
export class GoogleSuggestionsItemComponent {
  @Input() suggestion!: GoogleSuggestion;

  @Output() selectedSuggestion = new EventEmitter<number>();

  sendSelectedSuggestionId(id: number): void {
    this.selectedSuggestion.emit(id);
  }
}
