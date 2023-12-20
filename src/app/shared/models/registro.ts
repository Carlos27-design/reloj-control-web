import { Trabajador } from './trabajador';

export class Registro {
  id: number;
  fecha: Date;
  entrada: Date;
  salida: Date;
  longitudEntrada: string;
  latitudEntrada: string;
  longitudSalida: string;
  latitudSalida: string;
  Trabajador: Trabajador;
  created_at: Date;
  updated_at: Date;
}
