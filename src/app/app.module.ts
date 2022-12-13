import { FormcalculComponent } from './projets/formcalcul/formcalcul.component';
import { MclassesComponent } from './GFormation/User/user/mclasses/mclasses.component';
import { UpdateCourComponent } from './GFormation/User/formateur/update-cour/update-cour.component';
import { MClasseComponent } from './GFormation/User/formateur/mclasse/mclasse.component';
import { DetailComponent } from './GFormation/User/formateur/detail/detail.component';
import { DetailsComponent } from './GFormation/User/user/details/details.component';
import { CourComponent } from './GFormation/User/formateur/cour/cour.component';
import { CoursComponent } from './GFormation/User/user/cours/cours.component';
import { FormateurComponent } from './GFormation/Admin/formateur/formateur.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TableEtudiantComponent } from './etudiant/table-etudiant/table-etudiant.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddetudiantComponent } from './etudiant/addetudiant/addetudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { DeleteEtudiantComponent } from './etudiant/delete-etudiant/delete-etudiant.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { EditEtudiantComponent } from './etudiant/edit-etudiant/edit-etudiant.component';
import { MatSelectModule } from '@angular/material/select';
import { UserModule } from './user/user.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContratEtudiantComponent } from './etudiant/contrat-etudiant/contrat-etudiant.component';
import { EquipeEtudiantComponent } from './etudiant/equipe-etudiant/equipe-etudiant.component';
import { AssignEquipeComponent } from './etudiant/assign-equipe/assign-equipe.component';
import { AssignContratComponent } from './etudiant/assign-contrat/assign-contrat.component';
import { EtudiantDepartementComponent } from './etudiant/etudiant-departement/etudiant-departement.component';
import { EtudiantDomaineComponent } from './etudiant/etudiant-domaine/etudiant-domaine.component';
import { ErrorsComponent } from './user/errors/errors.component';
import { DepartementDialogComponent } from './departments/departement-dialog/departement-dialog.component';
import { DepartementTableComponent } from './departments/departement-table/departement-table.component';
import { DepartementsAssignDialogComponent } from './departments/departements-assign-dialog/departements-assign-dialog.component';
import { UniversiteTableComponent } from './universities/universite-table/universite-table.component';
import { UniversiteTableDetailsComponent } from './universities/universite-table-details/universite-table-details.component';
import { UniversiteDialogComponent } from './universities/universite-dialog/universite-dialog.component';
import { ProcomComponent } from './projets/procom/procom.component';
import { TableprojetsComponent } from './projets/tableprojets/tableprojets.component';
import { DialogprojetsComponent } from './projets/dialogprojets/dialogprojets.component';
import { DetailssComponent } from './projets/details/details.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AddcontratComponent } from './contrat/addcontrat/addcontrat.component';
import { DeleteContratComponent } from './contrat/delete-contrat/delete-contrat.component';
import { EditContratComponent } from './contrat/edit-contrat/edit-contrat.component';
import { ContratComponent } from './contrat/contrat.component';
import { TableContratComponent } from './contrat/table-contrat/table-contrat.component';
import { UpdatenotificatiobComponent } from './contrat/updatenotificatiob/updatenotificatiob.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AddreclamationComponent } from './reclamation/addreclamation/addreclamation.component';
import { DeleteReclamationComponent } from './reclamation/delete-reclamation/delete-reclamation.component';
import { EditReclamationComponent } from './reclamation/edit-reclamation/edit-reclamation.component';
import { TableReclamationComponent } from './reclamation/table-reclamation/table-reclamation.component';
import { DatePipe } from '@angular/common';
import { AzizComponent } from './aziz/aziz.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EtudiantComponent,
    TableEtudiantComponent,
    AddetudiantComponent,
    DeleteEtudiantComponent,
    EditEtudiantComponent,
    DashboardComponent,
    ContratEtudiantComponent,
    EquipeEtudiantComponent,
    AssignEquipeComponent,
    AssignContratComponent,
    EtudiantDepartementComponent,
    EtudiantDomaineComponent,
    DepartementDialogComponent,
    DepartementTableComponent,
    DepartementsAssignDialogComponent,
    UniversiteTableComponent,
    UniversiteTableDetailsComponent,
    UniversiteDialogComponent,
   FormateurComponent,
    CoursComponent,
    CourComponent,
    DetailsComponent,
    DetailComponent,
    MClasseComponent,
    UpdateCourComponent,
    MclassesComponent,
    ProcomComponent,
    TableprojetsComponent,
    DialogprojetsComponent,
    DetailssComponent,
    ProcomComponent,
    AddcontratComponent,
    DeleteContratComponent,
    EditContratComponent,
    ContratComponent,
    TableContratComponent,
    UpdatenotificatiobComponent,
    ReclamationComponent,
    AddreclamationComponent,
    DeleteReclamationComponent,
    EditReclamationComponent,
    TableReclamationComponent,
    FormcalculComponent,
    AzizComponent

  ],
  imports: [
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterOutlet,
    MatButtonModule,
    RouterLinkWithHref,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    RouterLink,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
