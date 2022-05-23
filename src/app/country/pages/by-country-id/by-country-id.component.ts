import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { Country, Currencies } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-id',
  templateUrl: './by-country-id.component.html',
  styles: [
  ]
})
export class ByCountryIdComponent implements OnInit {

  public country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService:CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.countryService.searchByCountryId(id).pipe(map(countries=> countries[0]))),
      // tap(console.log)
    ).subscribe((country: Country) => {
      this.country = country;
    })
  }
}
