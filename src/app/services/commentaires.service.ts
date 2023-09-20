import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../models/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private baseUrl = 'http://localhost:8082/commentaires';

  constructor(private http: HttpClient) {}

  getAllCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/getAllCommentaires`);
  }

  getAllCommentairesByPatient(id: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/getAllCommentairesByPatient/${id}`);
  }

  getCommentaireById(id: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`${this.baseUrl}/getCommentaireById/${id}`);
  }

  addCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(`${this.baseUrl}/addCommentaire`, commentaire);
  }

  deleteCommentaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteCommentaire/${id}`);
  }

  updateCommentaire(id:number , commentaire:Commentaire) : Observable<Commentaire>{
    return this.http.put<Commentaire>(`${this.baseUrl}/updateCommentaire/${id}`, commentaire);
  }

}
