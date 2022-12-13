import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Api1Service} from "../../shared/api1.service";

@Component({
  selector: 'app-delete-contrat',
  templateUrl: './delete-contrat.component.html',
  styleUrls: ['./delete-contrat.component.css']
})
export class DeleteContratComponent implements OnInit {

  constructor(private apiService:Api1Service,@Inject(MAT_DIALOG_DATA) public data: number,private dialogRef:MatDialogRef<DeleteContratComponent>) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.apiService.delete(id,"Contrat").subscribe({
      next: (res) => {
        alert('contrat deleted successfully');
        this.dialogRef.close('delete');
      },
      error: () => {
        alert('error when deleting contrat');
      },
    });
  }

}
