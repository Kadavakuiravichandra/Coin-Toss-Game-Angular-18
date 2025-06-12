import { Component } from '@angular/core';
import { CountryAndCapital } from '../../model/countrie-capital-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capitals-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './capitals-app.component.html',
  styleUrl: './capitals-app.component.css',
})
export class CapitalsAppComponent {
  countryAndCapitalsList: CountryAndCapital[] = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ];

  country: string = '';
}
