import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button{
      margin: 5px;
    }  
  `
  ]
})
export class ByRegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public countries:Country[] = [];
  _activeRegion: string = '';

  constructor(private countryService: CountryService) { }

  activeRegion(region: string){
    if(region === this._activeRegion) return;

    this._activeRegion = region;
    this.countries = [];
    this.countryService.searchByRegion(this._activeRegion).subscribe((countries: Country[])=>{
      this.countries = countries;
    }
    );
  }
}
