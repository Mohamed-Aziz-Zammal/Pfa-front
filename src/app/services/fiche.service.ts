import { Injectable } from '@angular/core';
import { Fiche } from '../models/Fiche';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  private baseUrl = 'http://localhost:8082/fiches';

  constructor(private http: HttpClient) {}

  getFicheById(id: number): Observable<Fiche> {
    return this.http.get<Fiche>(`${this.baseUrl}/getFicheById/${id}`);
  }

  addFiche(Fiche: Fiche): Observable<Fiche> {
    return this.http.post<Fiche>(`${this.baseUrl}/addFiche`, Fiche);
  }



  updateFiche(id:number , Fiche:Fiche) : Observable<Fiche>{
    return this.http.put<Fiche>(`${this.baseUrl}/updateFiche/${id}`, Fiche);
  }
}
