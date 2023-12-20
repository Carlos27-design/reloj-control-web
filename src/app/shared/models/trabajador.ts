import { Entrada } from './entrada';
import { Registro } from './registro';
import { Salida } from './salida';

export class Trabajador {
  id: number;
  rut: string;
  nombre: string;
  apellido: Date;
  Registros: Registro[];
  created_at: Date;
  updated_at: Date;
}
