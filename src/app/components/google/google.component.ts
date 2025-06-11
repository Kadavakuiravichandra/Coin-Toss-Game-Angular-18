import { Component } from '@angular/core';
import { GoogleSuggestion } from '../../model/google-suggestion-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleSuggestionsItemComponent } from '../google-suggestions-item/google-suggestions-item.component';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [CommonModule, FormsModule, GoogleSuggestionsItemComponent],
  templateUrl: './google.component.html',
  styleUrl: './google.component.css',
})
export class GoogleComponent {
  userInputText: string = '';

  suggestionsList: GoogleSuggestion[] = [
    { id: 1, suggestion: 'Learn Angular' },
    { id: 2, suggestion: 'Angular CLI' },
    { id: 3, suggestion: 'RxJS Observables' },
    { id: 4, suggestion: 'Angular vs React' },
    { id: 5, suggestion: 'Angular Tutorial' },
    { id: 6, suggestion: 'Angular Material' },
  ];

  filterSuggestion = [...this.suggestionsList];

  onSearchGoogleSuggestion(): void {
    this.filterSuggestion = this.suggestionsList.filter((suggestions) =>
      suggestions.suggestion
        .toLowerCase()
        .includes(this.userInputText.toLowerCase().trim())
    );
  }

  setSelectedSuggestion(id: number = 20): void {
    const findSuggestion = this.filterSuggestion.find(
      (eachSuggestionId) => eachSuggestionId.id === id
    );
    if (findSuggestion) {
      this.userInputText = findSuggestion.suggestion;
      this.onSearchGoogleSuggestion();
    } else {
      console.log('Not found');
    }
  }
}
