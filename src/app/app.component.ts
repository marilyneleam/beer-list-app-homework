import { Component } from '@angular/core';
import { Beer } from '../models/beer';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beer-list-app';

  public beers: Beer[] = [];
  public beer: any;
  public serviceError = false;
  public sortProperty: string = 'id';
  public sortOrder = 1;
  public loading = false;

  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.fetchBeers();
  }

  public fetchBeers() {
    this.apiService.fetchBeers().subscribe({
      next: (res: Beer[]) => {
        this.beers = res;
        this.beer = this.beers[0];
      },
      error: (error) => {
        console.log(error);
        this.serviceError = true;
      },
    });
  }

  public sortByYear(property: string) {
    const getYear = (str: string) => str.split('/')[1];

    this.sortOrder = property === this.sortProperty ? this.sortOrder * -1 : 1;
    this.sortProperty = property;
    this.beers = [
      ...this.beers.sort((a: any, b: any) => {
        let result = 0;
        if (getYear(a[property]) > getYear(b[property])) {
          result = -1;
        }
        if (getYear(a[property]) < getYear(b[property])) {
          result = 1;
        }
        return result * this.sortOrder;
      }),
    ];
  }

  otherSort(property: string) {
    this.sortOrder = property === this.sortProperty ? this.sortOrder * -1 : 1;
    this.sortProperty = property;
    this.beers = [
      ...this.beers.sort((a: any, b: any) => {
        let result = 0;
        if (a[property] < b[property]) {
          result = -1;
        }
        if (a[property] > b[property]) {
          result = 1;
        }
        return result * this.sortOrder;
      }),
    ];
  }
}
