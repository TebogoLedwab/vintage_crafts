import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  productCards = [
    {
      name: 'Papers & Ribbons',
      rate: 'Loved it'
    },
    {
      name: 'Card materials',
      rate: 'Loved it'
    },
    {
      name: 'Punches and dies',
      rate: 'Loved it'
    },
    {
      name: 'Card kits',
      rate: 'Loved it'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
