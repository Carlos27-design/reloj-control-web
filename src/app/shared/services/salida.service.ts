import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, HttpOptions } from '../config/config';
import { Salida } from '../models/salida';

const URL = baseUrl + 'salida/';

@Injectable({
  providedIn: 'root',
})
export class SalidaService {
  constructor(private readonly _http: HttpClient) {}

  public get(id: number): Observable<Salida> {
    return this._http.get<Salida>(URL + id, HttpOptions);
  }

  public getAll(): Observable<Salida[]> {
    return this._http.get<Salida[]>(URL, HttpOptions);
  }

  public create(salida: Salida): Observable<Salida> {
    return this._http.post<Salida>(URL, salida, HttpOptions);
  }

  public update(id: number, salida: Salida): Observable<void> {
    return this._http.patch<void>(URL + id, salida, HttpOptions);
  }

  public delete(id: number): Observable<void> {
    return this._http.delete<void>(URL + id, HttpOptions);
  }
}
