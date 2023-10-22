import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
