import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CommonGuard implements CanActivate {
  private user: User;
  private security: Security;

  constructor(
    private _authService: AuthenticationService
  ){
    this.user = JSON.parse(this._authService.getCurrentUser());
    this.security = JSON.parse(this._authService.getSecurity());
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.user.role && this.user.clientId !== 'unasigned' && this.security.token) {
      return true;
    } else {
      return false;
    }
  }
   
}

export interface Security {
  token: string,
  exp: number,
  iat: number,
};

export interface User {
  role: string,
  clientId: string
};