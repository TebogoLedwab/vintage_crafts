import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router
  ) { }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  // Method to get the user's information
  getUser() {
    const userJSON = localStorage.getItem('currentUser');
    return userJSON ? JSON.parse(userJSON) : null;
  }

  // Method to log the user out
  logout() {
    localStorage.removeItem('currentUser');
    this._router.navigate(['/home']);
  }
}
