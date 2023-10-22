import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      // User is logged in
      return true;
    }
    // navigate to login page as user is not authenticated
    this._router.navigate(['/home']);
    return false;
  }
}
