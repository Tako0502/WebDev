import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // Company methods
  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/companies/`);
  }

  getCompany(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/companies/${id}/`);
  }

  getCompanyVacancies(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/companies/${id}/vacancies/`);
  }

  // Vacancy methods
  getVacancies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vacancies/`);
  }

  getVacancy(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/vacancies/${id}/`);
  }

  getTopVacancies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vacancies/top_ten/`);
  }

  // Category methods
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories/`);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories/${id}/`);
  }

  getCategoryProducts(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories/${id}/products/`);
  }

  // Product methods
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}/`);
  }
} 