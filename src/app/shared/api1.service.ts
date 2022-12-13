import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  url = environment.BaseUrl;
  UUrl: string = "/api/kaddem/";
  headers1 = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
  }

  add(table: any, data: any) {
    return this.http.post<any>(this.UUrl + table + "/add", data);
  }

  get(table: any) {
    return this.http.get<any>(this.UUrl + table + "/all");
  }

  put(data: any,table:any) {
    return this.http.put<any>(this.UUrl+table + "/update/", data)
  }

  delete(id: number,table:any) {
    return this.http.delete<any>(this.UUrl + table +"/deletecontract/" + id);
  }

}
