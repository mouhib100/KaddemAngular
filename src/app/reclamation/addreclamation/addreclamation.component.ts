import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ApiService} from "../../shared/api.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Api1Service} from "../../shared/api1.service";

@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.css']
})
export class AddreclamationComponent implements OnInit {

  universiteForm!: FormGroup;
  myDate:any

  constructor(private apiService: Api1Service, private dialogRef: MatDialogRef<AddreclamationComponent>) { }

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



  addReclamation(f: any, h: any, k: any) {

    var data = Object.assign(f, h, k);
    var year =this.myDate.toLocaleString("default", { year: "numeric" });
    var month = this.myDate.toLocaleString("default", { month: "2-digit" });
    var day = this.myDate.toLocaleString("default", { day: "2-digit" });
    var formattedDate = year + "-" + month + "-" + day;
    data.date=formattedDate

// Generate yyyy-mm-dd date string
    console.log(formattedDate);  // Prints: 04-05-2022



    console.log(data.date);
    console.log(data)
    this.apiService.add("Reclamation", data).subscribe({
        next: (res) => {
          console.log(res);
          alert('Reclamation  added sucessfully');
          this.dialogRef.close('save'); // i need it when i add a universite the dialog close after the action is done

        }
      }
    );
  }
}

