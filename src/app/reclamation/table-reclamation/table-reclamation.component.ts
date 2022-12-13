import { Component, OnInit, ViewChild } from '@angular/core';
import { EditReclamationComponent } from '../edit-reclamation/edit-reclamation.component';
import { DeleteReclamationComponent } from '../delete-reclamation/delete-reclamation.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../../shared/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddreclamationComponent } from '../addreclamation/addreclamation.component';
import { Reclamation } from '../../models/Reclamation';
import { Api1Service } from '../../shared/api1.service';
import { EditContratComponent } from '../../contrat/edit-contrat/edit-contrat.component';
import { DeleteContratComponent } from '../../contrat/delete-contrat/delete-contrat.component';

@Component({
  selector: 'app-table-reclamation',
  templateUrl: './table-reclamation.component.html',
  styleUrls: ['./table-reclamation.component.css'],
})
export class TableReclamationComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'date',
    'title',
    'message',
    'processed',
    'action',
  ];
  dataSource!: MatTableDataSource<Reclamation>;
  pageSize = 6;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: Api1Service, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.get('Reclamation').subscribe((d) => {
      console.log(d);
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.paginator = this.paginator;
    });
  }
  openAddDialog() {
    this.dialog
      .open(AddreclamationComponent, {
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
    this.apiService.get('Reclamation').subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
    });
  }
  openDeleteDialog(f: any): void {
    this.dialog
      .open(DeleteReclamationComponent, {
        width: '250px',
        data: f,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'delete') {
          //the page load the data after the dialog component is closed
          this.fetch();
        }
      });
  }

  openEditDialog(f: any): void {
    this.dialog
      .open(EditReclamationComponent, {
        data: f,
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
}
