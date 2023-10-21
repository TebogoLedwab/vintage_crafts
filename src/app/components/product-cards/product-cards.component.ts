import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {
  @Input() products = []

  // productCards = [
  //   {
  //     name: 'Papers & Ribbons',
  //     rate: 'Loved it,'
  //   },
  //   {
  //     name: 'Card materials',
  //     rate: 'Loved it,'
  //   },
  //   {
  //     name: 'Punches and dies',
  //     rate: 'Loved it,'
  //   },
  //   {
  //     name: 'Card kits',
  //     rate: 'Loved it,'
  //   }
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
