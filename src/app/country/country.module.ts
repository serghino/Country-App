import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CurrencyPipe } from './pipes/currency.pipe';

import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCountryIdComponent } from './pages/by-country-id/by-country-id.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { LanguagePipe } from './pipes/language.pipe';



@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryIdComponent,
    CountryTableComponent,
    CountryInputComponent,
    CurrencyPipe,
    LanguagePipe
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryIdComponent
  ],
})
export class CountryModule {}
