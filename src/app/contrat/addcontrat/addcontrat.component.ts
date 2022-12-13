import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {MatDialogRef} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";
import {Api1Service} from "../../shared/api1.service";

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.css']
})
export class AddcontratComponent implements OnInit {

  universiteForm!: FormGroup
  myDate:any
  myDate1:any

  constructor(private apiService: Api1Service, private dialogRef: MatDialogRef<AddcontratComponent>) {
  }

  ngOnInit(): void {
  }


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  addContrat(f: any, h: any, k: any) {

    var data = Object.assign(f, h, k);
    var year =this.myDate.toLocaleString("default", { year: "numeric" });
    var month = this.myDate.toLocaleString("default", { month: "2-digit" });
    var day = this.myDate.toLocaleString("default", { day: "2-digit" });
    var formattedDate = year + "-" + month + "-" + day;
    data.dateDebutC=formattedDate

// Generate yyyy-mm-dd date string
    console.log(formattedDate);  // Prints: 04-05-2022

    var year =this.myDate1.toLocaleString("default", { year: "numeric" });
    var month = this.myDate1.toLocaleString("default", { month: "2-digit" });
    var day = this.myDate1.toLocaleString("default", { day: "2-digit" });
    var formattedDate = year + "-" + month + "-" + day;
    data.dateFinC=formattedDate

    console.log(data.dateDebutC);
    console.log(data)
    this.apiService.add("Contrat", data).subscribe({
        next: (res) => {
          console.log(res);
          alert('contrat  added sucessfully');
          this.dialogRef.close('save'); // i need it when i add a universite the dialog close after the action is done

        }
      }
    );
  }
}
