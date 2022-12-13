import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Api1Service} from "../../shared/api1.service";

@Component({
  selector: 'app-delete-reclamation',
  templateUrl: './delete-reclamation.component.html',
  styleUrls: ['./delete-reclamation.component.css']
})
export class DeleteReclamationComponent implements OnInit {

  constructor(private apiService:Api1Service,@Inject(MAT_DIALOG_DATA) public data: number,private dialogRef:MatDialogRef<DeleteReclamationComponent>) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.apiService.delete(id,"Reclamation").subscribe({
      next: (res) => {
        alert('reclamation deleted successfully');
        this.dialogRef.close('delete');
      },
      error: () => {
        alert('error when deleting reclamation');
      },
    });
  }

}

