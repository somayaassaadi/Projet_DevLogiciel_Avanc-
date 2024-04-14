import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Produit } from './produit';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiServerUrl}/produits`);
  }

  public addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.apiServerUrl}/produits`, produit);
  }

  public updateProduit(id: string,produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiServerUrl}/produits/${id}`, produit);
  }
 
  public deleteProduit(produitId: String): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/produits/${produitId}`);
  }

   // Méthode pour s'inscrire
   public registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/auth/register-user`, user);
  }

  // Méthode pour se connecter
  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/auth/login`, { email, password });
  }
}
