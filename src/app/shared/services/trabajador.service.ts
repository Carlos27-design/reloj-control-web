import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, HttpOptions } from '../config/config';
import { Trabajador } from '../models/trabajador';

const URL = baseUrl + 'trabajador/';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  constructor(private readonly _http: HttpClient) {}

  public get(id: number): Observable<Trabajador> {
    return this._http.get<Trabajador>(URL + id, HttpOptions);
  }

  public getAll(): Observable<Trabajador[]> {
    return this._http.get<Trabajador[]>(URL, HttpOptions);
  }

  public create(trabajador: Trabajador): Observable<Trabajador> {
    return this._http.post<Trabajador>(URL, trabajador, HttpOptions);
  }

  public update(id: number, trabajador: Trabajador): Observable<void> {
    return this._http.patch<void>(URL + id, trabajador, HttpOptions);
  }

  public delete(id: number): Observable<void> {
    return this._http.delete<void>(URL + id, HttpOptions);
  }
}
