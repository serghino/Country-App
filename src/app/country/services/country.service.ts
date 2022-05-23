import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private bapiBaseUrl = 'https://restcountries.com/v3.1';
  get params(){
    return new HttpParams().set('fields', 'cca2,name,capital,flags,population');
  }
  constructor(private http: HttpClient) {}

  public searchByCountryName(countryName: string): Observable<Country[]> {
    const url = `${this.bapiBaseUrl}/name/${countryName}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }
  public searchByCapitalName(capitalName: string): Observable<Country[]> {
    const url = `${this.bapiBaseUrl}/capital/${capitalName}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }
  public searchByCountryId(id: string): Observable<Country[]> {
    const url = `${this.bapiBaseUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
  public searchByRegion(id: string): Observable<Country[]> {
    const url = `${this.bapiBaseUrl}/region/${id}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }
}
