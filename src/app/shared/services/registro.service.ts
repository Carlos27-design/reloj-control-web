import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, HttpOptions } from '../config/config';
import { Registro } from '../models/registro';

const URL = baseUrl + 'registro/';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  constructor(private readonly _http: HttpClient) {}

  public get(id: number): Observable<Registro> {
    return this._http.get<Registro>(URL + id, HttpOptions);
  }

  public getAll(): Observable<Registro[]> {
    return this._http.get<Registro[]>(URL, HttpOptions);
  }

  public create(Registro: Registro): Observable<Registro> {
    return this._http.post<Registro>(URL, Registro, HttpOptions);
  }

  public update(id: number, Registro: Registro): Observable<void> {
    return this._http.patch<void>(URL + id, Registro, HttpOptions);
  }

  public delete(id: number): Observable<void> {
    return this._http.delete<void>(URL + id, HttpOptions);
  }
}
