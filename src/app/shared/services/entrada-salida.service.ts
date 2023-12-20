import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, HttpOptions } from '../config/config';
import { Entrada } from '../models/entrada';

const URL = baseUrl + 'entrada/';
@Injectable({
  providedIn: 'root',
})
export class EntradaSalidaService {
  constructor(private readonly _http: HttpClient) {}

  public get(id: number): Observable<Entrada> {
    return this._http.get<Entrada>(URL + id, HttpOptions);
  }

  public getAll(): Observable<Entrada[]> {
    return this._http.get<Entrada[]>(URL, HttpOptions);
  }

  public create(entrada: Entrada): Observable<Entrada> {
    return this._http.post<Entrada>(URL, entrada, HttpOptions);
  }

  public update(id: number, entrada: Entrada): Observable<void> {
    return this._http.patch<void>(URL + id, entrada, HttpOptions);
  }

  public delete(id: number): Observable<void> {
    return this._http.delete<void>(URL + id, HttpOptions);
  }
}
