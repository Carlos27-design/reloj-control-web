import { HttpHeaders } from '@angular/common/http';

export const baseUrl = 'http://localhost:3000/api/';
export const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
