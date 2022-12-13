import { Support } from './Support';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SupportService {

  private apiServerUrl = environment.BaseUrl;

  constructor(private http: HttpClient){}

  public getSupport(): Observable<Support[]> {
    return this.http.get<Support[]>(`${this.apiServerUrl}kaddem/support/all`);
  }


  getSupportById(idSupport: number): Observable<Support>{
    return this.http.get<Support>(`${this.apiServerUrl}kaddem/support/find/${idSupport}`);
  }


  public addSupport(s: Support): Observable<Support> {
    return this.http.post<Support>(`${this.apiServerUrl}kaddem/support/add`, s);
  }

  public updateSupport(s: Support): Observable<Support> {
    return this.http.put<Support>(`${this.apiServerUrl}kaddem/support/update`, s);
  }

  public deleteSupport(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}kaddem/support/delete/${Id}`);
  }

  updateSupports(id: number, s: Support): Observable<Object>{
    return this.http.put(`${this.apiServerUrl}kaddem/support/update/${id}`, s);
  }



}
