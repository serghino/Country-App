import { Pipe, PipeTransform } from '@angular/core';
import { Languages } from '../interfaces/country.interface';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(languages: Languages): string {
    return Object.values(languages).find(language => language);
  }

}
