import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RESTEmpleados, empleado } from '../interfaces/empleado';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  private apiUrl: string = environment.apiEndpoint;
  private version: string = "v1";

  private _http=inject(HttpClient);

  private _emps!: empleado[];

  constructor() { }

  findAllEmpleados(): Observable<RESTEmpleados> {
    return this._http.get<RESTEmpleados>(`${this.apiUrl}/${this.version}/employees`);
  }

  findEmpleado(id: number): Observable<RESTEmpleados> {
    return this._http.get<RESTEmpleados>(`${this.apiUrl}/${this.version}/employee/${id}`);
  }

  createEmpleado(emp: empleado): Observable<empleado | null> {
    if (!emp) return of(null);

    return this._http.post<empleado>(`${this.apiUrl}/${this.version}/create/`, emp);
  }

  getEmps(): empleado[] {
    return [...this._emps];
  }

  setEmps(emps: empleado[]): void {
    this._emps = emps;
  }
}
