import { Injectable } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment, url_api  } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public URL : string;
  public headers : any;
  public loggedIn: loggedData = {
    authenticated: true,
    id: 0,
    clientId: '',
    companyName: '',
    name: '',
    role: '',
    token: '',
    status: 0,
    exp: 0,
    iat: 0,
    photoUrl: ''
  };

  constructor(private http: HttpClient) { 
    this.URL = environment.production ? url_api.prod : url_api.dev;
    this.headers = new HttpHeaders();
  }

  getCurrentUser(){
    return localStorage.getItem('user');
  }

  getSecurity(){
    return localStorage.getItem('security');
  }

  setSecurity(exp, iat, token): void{
    const security = JSON.stringify({ exp: exp, iat: iat, token: token });
    localStorage.setItem('security', security);
  }

  setCurrentInfoUser(id, clientId, name, role, companyName, photoUrl){
    const currentInfoUser = JSON.stringify({ id: id, clientId: clientId, name: name, role: role, companyName: companyName, photoUrl: photoUrl });
    localStorage.setItem('user', currentInfoUser);
  }

  login(User: SocialUser){
    this.headers.set('Content-Type', 'application/json');
    return this.http.post(`${this.URL}/login`, { User }, { headers: this.headers }).pipe(map(res => res));
  }
}

export interface loggedData {
  authenticated: boolean,
  id:number,
  clientId: string,
  companyName: string,
  name: string,
  role: string,
  token: string,
  status: number,
  exp: number
  iat: number
  photoUrl?: string,
};

export interface userInfo {
  id:number,
  clientId: string,
  companyName: string,
  name: string,
  role: string,
  photoUrl?: string,
};
