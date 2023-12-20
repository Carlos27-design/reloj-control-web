import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { Rol } from 'app/shared/models/rol';
import { Usuario } from 'app/shared/models/usuario';
import { RolService } from 'app/shared/services/rol.service';
import { UsuarioService } from 'app/shared/services/usuario.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  public formGroup: FormGroup;
  public roles: Rol[];
  public usuarioId: number;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _usuarioService: UsuarioService,
    private readonly _rolesService: RolService,
    private readonly _formBuilder: FormBuilder,
    private readonly _fuseConfirmationService: FuseConfirmationService
  ) {
    this.formGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      repitaContrasena: ['', [Validators.required]],
      rol: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.usuarioId = parseInt(this._route.snapshot.paramMap.get('usuarioId'));
    this.getData();
    this.getRoles();
  }

  private getData(): void {
    this._usuarioService.get(this.usuarioId).subscribe(
      (res: Usuario) => {
        this.formGroup.get('email').setValue(res.email);
        this.formGroup.get('contrasena').setValue(res.contrasena);
        this.formGroup.get('repitaContrasena').setValue(res.contrasena);
        this.formGroup.get('rol').setValue(res.Roles.id);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  private getRoles(): void {
    this._rolesService.getAll().subscribe(
      (res: Rol[]) => {
        this.roles = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public onUpdate(): void {
    let usuario: Usuario = new Usuario();
    usuario.email = this.formGroup.value.email;
    usuario.contrasena = this.formGroup.value.contrasena;
    usuario.repetirContrasena = this.formGroup.value.repitaContrasena;
    usuario.Roles = this.formGroup.value.rol;

    this._usuarioService.update(this.usuarioId, usuario).subscribe(
      (res: void) => {
        this.toBack();
      },
      (err) => {}
    );
  }

  public onDelete(): void {
    const confirmation = this._fuseConfirmationService.open({
      title: 'Eliminar Usuario',
      message: '¿Estas seguro que deseas eliminar el usuario?',
      actions: {
        confirm: {
          label: 'Eliminar',
        },
        cancel: {
          label: 'Cancelar',
        },
      },
    });

    confirmation.afterClosed().subscribe((result) => {
      if (result === 'confirmed') {
        this._usuarioService.delete(this.usuarioId).subscribe(
          (res: void) => {
            this.toBack();
          },
          (err: HttpErrorResponse) => {}
        );
      }
    });
  }

  public toBack(): void {
    this._router.navigate(['usuario']);
  }
}
