import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  patient!: Patient;
  patientAddForm!: FormGroup;

  constructor(
    private route:Router,
    private location: Location,
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.patientAddForm = this.formBuilder.group({
      firstName:'',
      lastName:'',
      dateOfBirth:'',
      gender:'',
      address:'',
      phone:''
    });
  }

  onSubmitForm(){
    this.patientService.addPatient(this.patientAddForm.value).subscribe(
      response => {
        this.patient = response;
        let patientId = String(this.patient.id);
      }
    );
  }


  goBack(): void {
    this.location.back();
  }

}
