import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { Patient } from '../models/Patient';
import jwtDecode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:8082/patients';

  isAuthenticated : boolean = false ;
  role : any ;
  username : any ;
  accessToken! : string ;
  patient !: Patient ;
  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/getAllPatients`);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/getPatientById/${id}`);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.baseUrl}/addPatient`, patient);
  }

  deletePatientById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletePatientById/${id}`);
  }

  getPatientByMail(mail: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/getPatientByMail/${mail}`);
  }

  login(username: string, password: string): Observable<any> {


    //const requestBody = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    // Create an instance of HttpParams to build the x-www-form-urlencoded data
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    // Set the content type to application/x-www-form-urlencoded
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    // Send a POST request with the form data
    return this.http.post(`http://localhost:8082/login`,body.toString(), { headers }).pipe(
      tap((response: any) => {
        // Store the token in local storage
        localStorage.setItem('authToken', response.token);
        console.log('authToken', response.token);
      }),
      catchError((error: any) => {
        // Handle login errors here (e.g., display an error message to the user)
        console.error('Login failed:', error);
        console.log('uesr',username,'pwd',password)
        throw error; // Rethrow the error to propagate it further if needed
      })
    );
  }


  loadProfile(response: any) {
    this.isAuthenticated = true ;
    this.accessToken = response['accessToken'];
    let decodedJwt :any =jwtDecode(this.accessToken);
    this.username = decodedJwt.sub ;
    this.role = decodedJwt.scope ;

  }
}
