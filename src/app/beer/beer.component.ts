import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements OnInit {
  // @ts-ignore
  @Input() beer: Beer;

  constructor() {}

  ngOnInit(): void {}
}
