import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiprojService {

  constructor(private http : HttpClient) { }

  postProject(data : any) {

    return this.http.post<any>("http://localhost:8090/kaddem/controllerProjet/add", data);
  }

  getProject() {


    return this.http.get<any>("http://localhost:8090/kaddem/controllerProjet/retrieveAllProjects/");
  }



  putProject(data: any ) {
   return this.http.put<any>("http://localhost:8090/kaddem/controllerProjet/update/",data);
  }


  deleteProject(idProject : number) {

    return this.http.delete<any>('http://localhost:8090/kaddem/controllerProjet/remove/'+idProject);
  }

  calculsel( dateppp : string , datefff : string ){
    return this.http.get<any>("http://localhost:8090/kaddem/controllerProjet/nbrProjetsValides/" + dateppp +"/"+ datefff )
  }


}
