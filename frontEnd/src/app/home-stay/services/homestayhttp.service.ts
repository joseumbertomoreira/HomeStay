import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Host } from '../models/host';

@Injectable({
  providedIn: 'root'
})

export class HomestayhttpService {
  API: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  hostList() {
    return this.http
      .get<Host[]>(this.API);
  }

  host(name: string){
    return this.http
      .get<Host[]>(this.API+ "user/host/" + name);
  }

}
