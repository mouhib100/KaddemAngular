import { Formateur } from './Formateur';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FormateurService {
  private apiServerUrl = environment.BaseUrl;

  constructor(private http: HttpClient){}

  public getFormateur(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(`${this.apiServerUrl}kaddem/Formateur/all`);
  }

  public addFormateur(f: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(`${this.apiServerUrl}kaddem/Formateur/add`, f);
  }

  public updateFormateur(f: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.apiServerUrl}kaddem/Formateur/update`, f);
  }

  public deleteFormateur(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}kaddem/Formateur/delete/${Id}`);
  }
}
