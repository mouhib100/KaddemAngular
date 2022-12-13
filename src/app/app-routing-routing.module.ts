import { FormcalculComponent } from './projets/formcalcul/formcalcul.component';
import { MclassesComponent } from './GFormation/User/user/mclasses/mclasses.component';
import { UpdateCourComponent } from './GFormation/User/formateur/update-cour/update-cour.component';
import { CoursComponent } from './GFormation/User/user/cours/cours.component';
import { CourComponent } from './GFormation/User/formateur/cour/cour.component';
import { MClasseComponent } from './GFormation/User/formateur/mclasse/mclasse.component';
import { DetailComponent } from './GFormation/User/formateur/detail/detail.component';
import { DetailsComponent } from './GFormation/User/user/details/details.component';
import { FormateurComponent } from './GFormation/Admin/formateur/formateur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContratEtudiantComponent } from './etudiant/contrat-etudiant/contrat-etudiant.component';
import { EquipeEtudiantComponent } from './etudiant/equipe-etudiant/equipe-etudiant.component';
import { EtudiantDepartementComponent } from './etudiant/etudiant-departement/etudiant-departement.component';
import { UniversiteTableComponent } from './universities/universite-table/universite-table.component';
import { DepartementTableComponent } from './departments/departement-table/departement-table.component';
import { UniversiteTableDetailsComponent } from './universities/universite-table-details/universite-table-details.component';
import { TableprojetsComponent } from './projets/tableprojets/tableprojets.component';
import { DetailssComponent } from './projets/details/details.component';
import { ProcomComponent } from './projets/procom/procom.component';
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ContratComponent} from "./contrat/contrat.component";

const routes: Routes = [
  {path:'contrat',component:ContratComponent},
  {path:'reclamation',component:ReclamationComponent},

  { path: 'projets',
  children:[
    {path: 'details' ,component:DetailssComponent },
    {path: 'gestion' ,component:ProcomComponent },
    {path: 'calcul' ,component:FormcalculComponent }


  ] },

  { path: '', component: DashboardComponent },
  {
    path: 'etudiant',
    component: EtudiantComponent,
    children: [
      { path: 'departement', component: EtudiantDepartementComponent },
    ],
  },
  {
    path: 'utilisateur',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: 'Contrat/:id', component: ContratEtudiantComponent },
  { path: 'equipe', component: EquipeEtudiantComponent },
  {
    path: 'universite',
    component: UniversiteTableComponent,
  },

  {
    path: 'departements',
    component: DepartementTableComponent,
  },
  {
    path: 'universite/:id',
    component: UniversiteTableDetailsComponent,
  },{path: 'formateur', component: FormateurComponent},
  {path: 'Udetail/:id', component: DetailsComponent},
  {path: 'Fdetail/:id', component: DetailComponent},
  {path: 'Fclasse', component: MClasseComponent},
  {path: 'Fcour/:id', component: CourComponent},
  {path: 'Ucour/:id', component: CoursComponent},
  {path: 'update-Cour/:id', component: UpdateCourComponent},
  {path: 'Uclasse', component: MclassesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
