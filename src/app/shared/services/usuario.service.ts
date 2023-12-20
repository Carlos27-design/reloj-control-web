import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, HttpOptions } from '../config/config';
import { Usuario } from '../models/usuario';

const URL = baseUrl + 'usuario/';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private readonly _http: HttpClient) {}

  public get(id: number): Observable<Usuario> {
    return this._http.get<Usuario>(URL + id, HttpOptions);
  }

  public getAll(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(URL, HttpOptions);
  }

  public create(usuario: Usuario): Observable<Usuario> {
    return this._http.post<Usuario>(URL, usuario, HttpOptions);
  }

  public update(id: number, usuario: Usuario): Observable<void> {
    return this._http.patch<void>(URL + id, usuario, HttpOptions);
  }

  public delete(id: number): Observable<void> {
    return this._http.delete<void>(URL + id, HttpOptions);
  }
}
