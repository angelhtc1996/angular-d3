import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthenticationService
  ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    if (this._authService.loggedIn.authenticated && this._authService.loggedIn.role) {
      this._authService.setSecurity(this._authService.loggedIn.exp, this._authService.loggedIn.iat, this._authService.loggedIn.token);
      this._authService.setCurrentInfoUser(this._authService.loggedIn.id, this._authService.loggedIn.clientId, this._authService.loggedIn.name, this._authService.loggedIn.role, this._authService.loggedIn.companyName, this._authService.loggedIn.photoUrl);
      return true;
    } else {
      return false;
    }
  }
}
