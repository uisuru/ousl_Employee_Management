import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private baseUrl = 'http://localhost:8080/api_emp/api/v1/parents';

  constructor(private http: HttpClient) { }

  getParent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createParent(parent: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, parent);
  }

  updateParent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteParent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getParentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(`${"http://localhost:8080/api_emp/api/v1/employees"}`);
  }
}