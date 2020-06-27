import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private baseUrl = 'http://localhost:8080/api_emp/api/v1/salarys';

  constructor(private http: HttpClient) { }

  getSalary(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSalary(salary: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, salary);
  }

  updateSalary(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSalary(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSalarysList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}