import { Router } from '@angular/router';
import { MClasseService } from './../../../MClasse.service';
import { NgForm } from '@angular/forms';
import { MClasse } from './../../../MClasse';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mclasse',
  templateUrl: './mclasse.component.html',
  styleUrls: ['./mclasse.component.css']
})
export class MClasseComponent implements OnInit {


  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public MClasse: MClasse[];
  public editMClasse: MClasse;
  public deleteMClasse: MClasse;
  constructor(private Services: MClasseService,private router: Router) { }

  ngOnInit() {
    this.getMClasse();
  }

  public getMClasse(): void {
    this.Services.getMClasse().subscribe(
      (response: MClasse[]) => {
        this.MClasse = response;
        console.log(this.MClasse);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddMClasse(addSupp: NgForm): void {
    document.getElementById('add-MClasse-form').click();
    this.Services.addMClasse(addSupp.value).subscribe(
      (response: MClasse) => {
        console.log(response);
        this.getMClasse();
        addSupp.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addSupp.reset();
      }
    );
  }

  public onUpdateMClasse(s: MClasse): void {
    this.Services.updateMClasse(s).subscribe(
      (response: MClasse) => {
        console.log(response);
        this.getMClasse();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteMClasse(Id: number): void {
    this.Services.deleteMClasse(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getMClasse();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchMClasse(key: string): void {
    console.log(key);
    const results: MClasse[] = [];
    for (const f of this.MClasse) {
      if (f.matiere.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || f.emailF.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || f.classe.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(f);
      }
    }
    this.MClasse = results;
    if (results.length === 0 || !key) {
      this.getMClasse();
    }
  }

  public onOpenModal(s: MClasse, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMClasseModal');
    }
    if (mode === 'edit') {
      this.editMClasse = s;
      button.setAttribute('data-target', '#updateMClasseModal');
    }
    if (mode === 'delete') {
      this.deleteMClasse = s;
      button.setAttribute('data-target', '#deleteMClasseModal');
    }
    container.appendChild(button);
    button.click();
  }




  Cour(id: number){
    this.router.navigate(['Fcour', id]);
  }





}
