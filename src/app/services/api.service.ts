import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../../models/beer';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public fetchBeers() {
    return this.httpClient.get<Beer[]>('https://api.punkapi.com/v2/beers');
  }
}
