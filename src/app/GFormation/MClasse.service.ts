import { MClasse } from './MClasse';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MClasseService {
  private apiServerUrl = environment.BaseUrl;

  constructor(private http: HttpClient){}

  public getMClasse(): Observable<MClasse[]> {
    return this.http.get<MClasse[]>(`${this.apiServerUrl}kaddem/MClasse/all`);
  }

  getMClasseById(idMClasse: number): Observable<MClasse>{
    return this.http.get<MClasse>(`${this.apiServerUrl}kaddem/MClasse/find/${idMClasse}`);
  }

  public addMClasse(mc: MClasse): Observable<MClasse> {
    return this.http.post<MClasse>(`${this.apiServerUrl}kaddem/MClasse/add`, mc);
  }

  public updateMClasse(mc: MClasse): Observable<MClasse> {
    return this.http.put<MClasse>(`${this.apiServerUrl}kaddem/MClasse/update`, mc);
  }

  public deleteMClasse(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}kaddem/MClasse/delete/${Id}`);
  }
}
