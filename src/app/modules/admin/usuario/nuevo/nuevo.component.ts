import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'app/shared/models/rol';
import { Trabajador } from 'app/shared/models/trabajador';
import { Usuario } from 'app/shared/models/usuario';
import { RolService } from 'app/shared/services/rol.service';
import { TrabajadorService } from 'app/shared/services/trabajador.service';
import { UsuarioService } from 'app/shared/services/usuario.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent implements OnInit {
  public formGroup: FormGroup;
  public roles: Rol[];
  public trabajadores: Trabajador[];
  public desactivarGuardar: boolean = false;

  constructor(
    private readonly _router: Router,
    private readonly _usuarioService: UsuarioService,
    private readonly _rolService: RolService,
    private readonly _trabajadorService: TrabajadorService,
    private readonly _formBuilder: FormBuilder
  ) {
    this.formGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      repitaContrasena: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      trabajador: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this._rolService.getAll().subscribe(
      (res: Rol[]) => {
        this.roles = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
    this._trabajadorService.getAll().subscribe(
      (res: Trabajador[]) => {
        this.trabajadores = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public onSubmit(): void {
    let usuario = new Usuario();
    usuario.email = this.formGroup.value.email;
    usuario.contrasena = this.formGroup.value.contrasena;
    usuario.repetirContrasena = this.formGroup.value.repitaContrasena;
    usuario.Roles = this.formGroup.value.rol;
    usuario.Trabajadores = this.formGroup.value.trabajador;
    if (usuario.contrasena === usuario.repetirContrasena) {
      this._usuarioService.create(usuario).subscribe(
        (res: Usuario) => {
          this.toBack();
        },
        (err: HttpErrorResponse) => {
          this.formGroup.get('email').setValue('');
          this.formGroup.get('contrasena').setValue('');
          this.formGroup.get('repitaContrasena').setValue('');
          this.formGroup.get('rol').setValue('');
        }
      );
    }
  }

  public toBack(): void {
    this._router.navigate(['usuario']);
  }
}
