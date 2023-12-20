import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Localizacion } from '../interfaces/localizacion.interface';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor(private _http: HttpClient) {}

  public getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({
            lng: resp.coords.longitude,
            lat: resp.coords.latitude,
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
