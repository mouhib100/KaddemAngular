import { FormateurService } from '../../Formateur.service';
import { Formateur } from './../../Formateur';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {



  public Formateur: Formateur[];
  public editFormateur: Formateur;
  public deleteFormateur: Formateur;

  constructor(private Services: FormateurService){}

  ngOnInit() {
    this.getFormateur();
  }

  public getFormateur(): void {
    this.Services.getFormateur().subscribe(
      (response: Formateur[]) => {
        this.Formateur = response;
        console.log(this.Formateur);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddFormateur(addForm: NgForm): void {
    document.getElementById('add-Formateur-form').click();
    this.Services.addFormateur(addForm.value).subscribe(
      (response: Formateur) => {
        console.log(response);
        this.getFormateur();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateFormateur(f: Formateur): void {
    this.Services.updateFormateur(f).subscribe(
      (response: Formateur) => {
        console.log(response);
        this.getFormateur();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteFormateur(Id: number): void {
    this.Services.deleteFormateur(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getFormateur();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchFormateur(key: string): void {
    console.log(key);
    const results: Formateur[] = [];
    for (const f of this.Formateur) {
      if (f.nomPrenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || f.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || f.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || f.matiere.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(f);
      }
    }
    this.Formateur = results;
    if (results.length === 0 || !key) {
      this.getFormateur();
    }
  }
  public onOpenModal(f: Formateur, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addFormateurModal');
    }
    if (mode === 'edit') {
      this.editFormateur = f;
      button.setAttribute('data-target', '#updateFormateurModal');
    }
    if (mode === 'delete') {
      this.deleteFormateur = f;
      button.setAttribute('data-target', '#deleteFormateurModal');
    }
    container.appendChild(button);
    button.click();
  }

}

