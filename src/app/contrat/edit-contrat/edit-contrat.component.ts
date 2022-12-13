import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../shared/api.service";
import {Api1Service} from "../../shared/api1.service";

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css']
})
export class EditContratComponent implements OnInit {

  editForm!:FormGroup;


  disabled: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public editData:any,private dialogRef:MatDialogRef<EditContratComponent>,private formBuilder:FormBuilder,private apiService: Api1Service) { }

  ngOnInit(): void {
    //idCtrl = new FormControl({value: '', disabled: this.disabled})
    this.editForm=this.formBuilder.group({
      idContrat : new FormControl({value: '', disabled: this.disabled})   ,
      dateDebutC:['',Validators.required],
      dateFinC:['',Validators.required],
      archive:['',Validators.required],
      specialite:['',Validators.required],
      MontantC:['',Validators.required],
    })
    console.log(this.editData)
    if (this.editData){
      this.editForm.controls['idContrat'].setValue(this.editData.idContrat)
      this.editForm.controls['dateDebutC'].setValue(this.editData.dateDebutC)
      this.editForm.controls['dateFinC'].setValue(this.editData.dateFinC)
      this.editForm.controls['archive'].setValue(this.editData.archive)
      this.editForm.controls['specialite'].setValue(this.editData.specialite)
      this.editForm.controls['MontantC'].setValue(this.editData.MontantC)

    }
  }
  EditContrat(){
    this.editForm.value.idContrat= this.editData.idContrat;
    console.log(this.editForm.value);
    this.apiService
      .put(this.editForm.value,"Contrat")
      .subscribe({
        next: (res) => {
          alert('Contrat updated successfully');
          console.log(this.editForm.value);
          this.editForm.reset();
          this.dialogRef.close('update');
        },
        error: (err) => {
          alert('error while updating');
        },
      });
  }


}
