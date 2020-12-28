import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment, url_api } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Central3plService {
  public URL: string;
  public headers: any;

  constructor(private http: HttpClient) {
    this.URL = environment.production ? url_api.prod : url_api.dev;
    this.headers = new HttpHeaders();
  }

  getCustomers(){
    this.headers.set('Content-Type', 'application/json');
    return this.http.get(`${this.URL}/Central3PL/customers`, { headers: this.headers });
  }

  getInventory(){
    this.headers.set('Content-Type', 'application/json');
    return this.http.get(`${this.URL}/Central3PL/inventory`, { headers: this.headers });
  }

  getOrders(customerId=null){
    const params = customerId ? new HttpParams().set('customerId', customerId) : {};
    this.headers.set('Content-Type', 'application/json');
    return this.http.get(`${this.URL}/Central3PL/orders`, { headers: this.headers , params: params});
  }
  
  getDashboardData(indicator=1, customerId=null){
    let params = new HttpParams().set('indicator', indicator.toString());
    if(customerId) {
      params = params.set('customerId', customerId);
    }
    this.headers.set('Content-Type', 'application/json');
    return this.http.get(`${this.URL}/Central3PL/dashboard/data`, { headers: this.headers , params: params});
  }
}
