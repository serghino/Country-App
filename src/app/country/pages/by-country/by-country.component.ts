import { Component } from '@angular/core';
import { catchError, Observable, Observer, of } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  hasError: boolean = false;

  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  showsuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  public search(term: string) {
    this.hasError = false;
    this.showsuggestions = false;
    this.countryService
      .searchByCountryName(term)
      .pipe(
        catchError(() => {
          this.hasError = true;
          this.term = term;
          return of([] as Country[]);
        })
      )
      .subscribe((countries) => (this.countries = countries));
  }

  public suggestion(term: string) {
    this.hasError = false;
    this.term = term;
    this.showsuggestions = true;
    this.countryService
      .searchByCountryName(term)
      .subscribe((countries) => (this.suggestedCountries = countries.splice(0, 5)),
      (_error) => { this.suggestedCountries = []});
  }

  public searchBySuggestion(term: string) {
    this.search(term);
  }
}
