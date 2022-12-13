import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MClasseService } from './../../../MClasse.service';
import { MClasse } from './../../../MClasse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mclasses',
  templateUrl: './mclasses.component.html',
  styleUrls: ['./mclasses.component.css']
})
export class MclassesComponent implements OnInit {


  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public MClasses: MClasse[];
  public editMClasses: MClasse;
  public deleteMClasses: MClasse;
  constructor(private Services: MClasseService,private router: Router) { }

  ngOnInit() {
    this.getMClasse();
  }

  public getMClasse(): void {
    this.Services.getMClasse().subscribe(
      (response: MClasse[]) => {
        this.MClasses = response;
        console.log(this.MClasses);
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
    for (const f of this.MClasses) {
      if (f.matiere.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || f.emailF.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || f.classe.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(f);
      }
    }
    this.MClasses = results;
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
      this.editMClasses = s;
      button.setAttribute('data-target', '#updateMClasseModal');
    }
    if (mode === 'delete') {
      this.deleteMClasses = s;
      button.setAttribute('data-target', '#deleteMClasseModal');
    }
    container.appendChild(button);
    button.click();
  }




  Cour(id: number){
    this.router.navigate(['Ucour', id]);
  }


}
