import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isUserLoggedIn: boolean = false;

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
  constructor(
    public _authService: AuthService
  ) {
    // Check if the user is already logged in
    this.isUserLoggedIn = _authService.isAuthenticated();
  }

  ngOnInit(): void {
  }

}
