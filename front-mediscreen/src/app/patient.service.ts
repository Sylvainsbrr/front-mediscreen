import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './model/patient';
// import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  // PATIENT

  getPatients(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>('http://localhost:8080/patients');
  }

  getPatient(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>('http://localhost:8080/patient-info/' + id);
  }

  deletePatient(id: number): Observable<Patient>{
    return this.httpClient.delete<Patient>('http://localhost:8080/patient/' + id);
  }

  editPatient(id: number, params:any): Observable<any>{
    return this.httpClient.put<Patient>('http://localhost:8080/patient/' + id, params);
  }

  addPatient(params:any): Observable<any>{
    return this.httpClient.post<Patient>('http://localhost:8080/patient/', params);
  }

}
