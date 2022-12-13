import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SupportService } from './../../../Support.service';
import { Support } from './../../../Support';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {//idt :number
  id: number

  //cour: Support
  constructor(private route: ActivatedRoute, private Services: SupportService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

//this.idt=this.route.snapshot.params['id'];
    this.getCours();
  }

  Cours: Support[];

  private getCours(){

    this.Services.getSupport().subscribe(data => {
      this.Cours = data;
    });
  }

  CoursDetails(idSupport: number){
    this.router.navigate(['Udetail', idSupport]);
  }



  updateCours(id: number){
    this.router.navigate(['update-Cour', id]);
  }

  deleteCours(id: number){
    this.Services.deleteSupport(id).subscribe( data => {
      console.log(data);
      this.getCours();
    })
  }








  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public Support: Support[];
  public editSupport: Support;
  public deleteSupport: Support;

  public getSupport(): void {
    this.Services.getSupport().subscribe(
      (response: Support[]) => {
        this.Support = response;
        console.log(this.Support);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  s:Support;
  public onAddSupport(addSupp: NgForm): void {
    document.getElementById('add-Support-form').click();

    this.Services.addSupport(addSupp.value).subscribe(
      (response: Support) => {
        console.log(response);
        this.getSupport();
        addSupp.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addSupp.reset();
      }
    );
  }

  public onUpdateSupport(s: Support): void {
    this.Services.updateSupport(s).subscribe(
      (response: Support) => {
        console.log(response);
        this.getSupport();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSupport(Id: number): void {
    this.Services.deleteSupport(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getSupport();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onOpenModal(s: Support, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSupportModal');
    }
    if (mode === 'edit') {
      this.editSupport = s;
      button.setAttribute('data-target', '#updateSupportModal');
    }
    if (mode === 'delete') {
      this.deleteSupport = s;
      button.setAttribute('data-target', '#deleteSupportModal');
    }
    container.appendChild(button);
    button.click();
  }




  reload(){
    this.ngOnInit()
  }



}
