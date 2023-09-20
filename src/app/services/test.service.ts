import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Test } from '../models/Test';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = 'http://localhost:8082/test';

  constructor(private http: HttpClient) {}

  addTest(test: Test): Observable<Test> {
    return this.http.post<Test>(`${this.baseUrl}/addTest`, test);
  }

  getAllTestsByPatient(id: number): Observable<Test[]> {
    return this.http.get<Test[]>(`${this.baseUrl}/getAllTestsByPatient/${id}`);
  }
}
