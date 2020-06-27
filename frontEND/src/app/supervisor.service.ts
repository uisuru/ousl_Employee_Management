import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  private baseUrl = 'http://localhost:8080/api_emp/api/v1/supervisors';

  constructor(private http: HttpClient) { }

  getSupervisor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSupervisor(supervisor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, supervisor);
  }

  updateSupervisor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSupervisor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSupervisorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}