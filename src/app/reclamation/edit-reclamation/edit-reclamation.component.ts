import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../shared/api.service";
import {Api1Service} from "../../shared/api1.service";

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit {

  editForm!:FormGroup;


  disabled: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public editData:any,private dialogRef:MatDialogRef<EditReclamationComponent>,private formBuilder:FormBuilder,private apiService: Api1Service) { }

  ngOnInit(): void {
    //idCtrl = new FormControl({value: '', disabled: this.disabled})
    this.editForm=this.formBuilder.group({
      idReclamation : new FormControl({value: '', disabled: this.disabled})   ,
      date:['',Validators.required],
      title:['',Validators.required],
      message:['',Validators.required],
      processed:['',Validators.required],

    })
    console.log(this.editData)
    if (this.editData){
      this.editForm.controls['idReclamation'].setValue(this.editData.idReclamation)
      this.editForm.controls['date'].setValue(this.editData.date)
      this.editForm.controls['title'].setValue(this.editData.title)
      this.editForm.controls['message'].setValue(this.editData.message)
      this.editForm.controls[' processed'].setValue(this.editData. processed)


    }
  }
  EditReclamation(){
    this.editForm.value.idReclamation= this.editData.idReclamation;
    console.log(this.editForm.value);
    this.apiService
      .put(this.editForm.value,"Reclamation")
      .subscribe({
        next: (res) => {
          alert('Reclamation updated successfully');
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
