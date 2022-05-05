import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {path:'patients', component: PatientListComponent},
  {path:'patient-info/:id', component: PatientDetailComponent},
  {path:'patient-edit/:id', component: PatientEditComponent},
  {path:'patient-add', component: PatientAddComponent},
  {path:'**', redirectTo:'/patients'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
