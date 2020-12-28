import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment, url_api } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public URL: string;
  public headers: any;

  constructor(private http: HttpClient) {
    this.URL = environment.production ? url_api.prod : url_api.dev;
    this.headers = new HttpHeaders();
  }

  getAllUsers() {
    this.headers.set('Content-Type', 'application/json');
    return this.http.get(`${this.URL}/users`, { headers: this.headers });
  }

  updateStatusUser(id, status) {
    this.headers.set('Content-Type', 'application/json');
    
    return this.http.put(`${this.URL}/users/${id}`, { 'status': status }, { headers: this.headers } );
  }

  assignClientId(clientId, userId, companyName){
    this.headers.set('Content-Type', 'application/json');
    return this.http.put(`${this.URL}/users/${companyName}/${clientId}/${userId}`, { headers: this.headers });
  }
}
