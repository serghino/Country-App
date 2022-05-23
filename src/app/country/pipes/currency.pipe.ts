import { Pipe, PipeTransform } from '@angular/core';
import { Currencies } from '../interfaces/country.interface';
import { Currency } from '../interfaces/curency.interface';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(currencies: Currencies): string {
    const {name,symbol} = Object.values(currencies).find(currency => currency?.name);
    return `${name} (${symbol})`;
  }

}
