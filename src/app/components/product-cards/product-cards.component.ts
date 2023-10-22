import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {
  @Input() productName?: string;
  @Input() productRate?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
