import { Component, Inject , OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiprojService } from 'src/app/services/apiproj.service';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogprojets',
  templateUrl: './dialogprojets.component.html',
  styleUrls: ['./dialogprojets.component.css']
})
export class DialogprojetsComponent {
projectForm !: FormGroup;
actionbutton : string = "Save" ; 
ajoutmodif : string = "Ajouter ";
ajtprclass = "ajtpr";
style1 ="blue";
style2="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
style3="none" ;

  

  constructor(private formbuilder : FormBuilder, private apiproj : ApiprojService, @Inject (MAT_DIALOG_DATA) public editData:any , private dialogref : MatDialogRef<DialogprojetsComponent>) { }

  ngOnInit() :void {

   this.projectForm=this.formbuilder.group({

    nomProjet : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    nomEnseignant : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    dateDebutP : ['',Validators.required],
    dateFinP : ['',[Validators.required]],
    module : ['',Validators.required],
    selection : ['',Validators.required]
   })

   console.log(this.editData);

   if (this.editData) {

       this.actionbutton="Update " ;
       this.ajoutmodif="Modifier " ;
       this.style3="flex";
       this.projectForm.controls['nomProjet'].setValue(this.editData.nomProjet);
       this.projectForm.controls['nomEnseignant'].setValue(this.editData.nomEnseignant);
       this.projectForm.controls['dateDebutP'].setValue(this.editData.dateDebutP);
       this.projectForm.controls['dateFinP'].setValue(this.editData.dateFinP);
       this.projectForm.controls['module'].setValue(this.editData.module);
       this.projectForm.controls['selection'].setValue(this.editData.selection);
       

   }
   }

   
addproject() {
if (!this.editData){

  if (this.projectForm.valid){

    this.apiproj.postProject(this.projectForm.value)
    .subscribe({
      next:(res)=>{
      alert("Project added successfully");
      this.projectForm.reset();
      this.dialogref.close('save');
      },
      error:(res)=>{
        alert("Error")
        }
  
    })
  }
}
else{
  this.updateProject()
}
}

updateProject() {

this.projectForm.value.idProject=this.editData.idProject;


this.apiproj.putProject(this.projectForm.value)
.subscribe({
next:(res)=>{
  alert("updated successfully");
  this.projectForm.reset();
  this.dialogref.close('update') ;
},
  error:(res)=>{
  alert("Error")
  }

})


}

}
