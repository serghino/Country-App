import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  term: string = '';
  hasError: boolean = false;

  countries: Country[] = [];

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    console.log(this.countryService.searchByCapitalName('a'));
  }

  public search(term: string) {
    this.hasError = false;
    this.countryService
      .searchByCapitalName(term)
      .pipe(
        catchError(() => {
          this.hasError = true;
          this.term = term;
          return of([] as Country[]);
        })
      )
      .subscribe((countries) => (this.countries = countries));
  }
}
