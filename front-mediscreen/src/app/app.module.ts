import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './model/patient/patient.component';
import { PatientAddComponent } from './patient-add/patient-add/patient-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
