import { Rol } from './rol';
import { Trabajador } from './trabajador';

export class Usuario {
  id: number;
  email: string;
  contrasena: string;
  repetirContrasena: string;
  Roles: Rol;
  Trabajadores: Trabajador;
  created_at: Date;
  updated_at: Date;
}
