import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiprojService } from 'src/app/services/apiproj.service';

@Component({
  selector: 'app-formcalcul',
  templateUrl: './formcalcul.component.html',
  styleUrls: ['./formcalcul.component.css']
})
export class FormcalculComponent implements OnInit {
  calculForm !: FormGroup;
  nbrfin : Number
  date1:any
  date2:any
  ojoj:string
  
  constructor(private formbuilder : FormBuilder, private apiproj : ApiprojService, private datePipe: DatePipe) { 
    
  }

  ngOnInit(): void {


    this.calculForm=this.formbuilder.group({

      
      dateDebutPP : ['',Validators.required],
      dateFinPP : ['',[Validators.required]],
      
     })



  }





  calculnbrslct() {
    console.log(this.date1=this.datePipe.transform( this.calculForm.value.dateDebutPP , "yyyy-MM-dd"))
    this.date1=this.datePipe.transform( this.calculForm.value.dateDebutPP , "yyyy-MM-dd")
    this.date2=this.datePipe.transform( this.calculForm.value.dateFinPP , "yyyy-MM-dd")

    this.apiproj.calculsel(this.date1,this.date2)
    .subscribe({
      next:(res)=>{
        console.log(res)
       this.nbrfin=res
       this.ojoj= "Le nombre des projets selectionnés dans cette pèriode est :"
      }
    })
  
  
  
  }

}


