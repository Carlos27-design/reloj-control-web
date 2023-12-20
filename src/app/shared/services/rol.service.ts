import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, HttpOptions } from '../config/config';
import { Rol } from '../models/rol';

const URL = baseUrl + 'rol/';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  constructor(private readonly _http: HttpClient) {}

  public get(id: number): Observable<Rol> {
    return this._http.get<Rol>(URL + id, HttpOptions);
  }

  public getAll(): Observable<Rol[]> {
    return this._http.get<Rol[]>(URL, HttpOptions);
  }

  public create(rol: Rol): Observable<Rol> {
    return this._http.post<Rol>(URL, rol, HttpOptions);
  }

  public update(id: number, rol: Rol): Observable<void> {
    return this._http.patch<void>(URL + id, rol, HttpOptions);
  }

  public delete(id: number): Observable<void> {
    return this._http.delete<void>(URL + id, HttpOptions);
  }
}
