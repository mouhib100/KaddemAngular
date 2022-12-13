import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ApiService} from "../../shared/api.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Contrat} from "../../models/Contrat";
import {MatDialog} from "@angular/material/dialog";
import {DeleteContratComponent} from "../delete-contrat/delete-contrat.component";
import {EditContratComponent} from "../edit-contrat/edit-contrat.component";
import {AddcontratComponent} from "../addcontrat/addcontrat.component";
import {Api1Service} from "../../shared/api1.service";

@Component({
  selector: 'app-table-contrat',
  templateUrl: './table-contrat.component.html',
  styleUrls: ['./table-contrat.component.css']
})
export class TableContratComponent implements OnInit {

  displayedColumns: string[] = ['id', 'datedebut','datefin','specialite','archive','montantc','Etudiant','action'];
  dataSource!: MatTableDataSource<Contrat>;
  pageSize = 6;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  search:string='';

  constructor(private apiService:Api1Service,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.get("Contrat").subscribe(
      (d)=>{
        console.log(d);
        this.dataSource = new MatTableDataSource(d);
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  openAddDialog() {
    this.dialog
      .open(AddcontratComponent, {
        height: '60%',
        width: '50%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          //the page load the data after the dialog component is closed
          this.fetch();
        }
      });
  }

  fetch() {
    this.apiService.get("Contrat").subscribe({
        next: (res) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
        }
      }
    )
  }
  getColor(f:any){
    console.log(f)
    switch (f) {
      case true:
        return 'green';
      case false:
        return 'red';

    }
    return null;
  }
  openDeleteDialog(f:any): void {
    this.dialog.open(DeleteContratComponent, {
      width: '250px',
      data: f
    })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'delete') {
          //the page load the data after the dialog component is closed
          this.fetch();
        }
      });
  }


  openEditDialog(f:any): void {
    this.dialog.open(EditContratComponent, {
      data:f
    })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          //the page load the data after the dialog component is closed
          this.fetch();
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  showRefreshMsg(message:any){

    setTimeout(() => {
      this.fetch();
      alert(message);
    }, 1000);
  }

}

