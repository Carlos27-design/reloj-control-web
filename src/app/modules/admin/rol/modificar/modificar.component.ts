import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseLoadingService } from '@fuse/services/loading';
import { Rol } from 'app/shared/models/rol';
import { RolService } from 'app/shared/services/rol.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  public formGroup: FormGroup;
  public rolId: number;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _rolService: RolService,
    private readonly _formBuilder: FormBuilder,
    private readonly _fuseConfirmationService: FuseConfirmationService
  ) {
    this.formGroup = this._formBuilder.group({
      rol: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.rolId = parseInt(this._route.snapshot.paramMap.get('rolId'));
    this.getData();
  }

  private getData(): void {
    this._rolService.get(this.rolId).subscribe(
      (res: Rol) => {
        this.formGroup.get('rol').setValue(res.rol);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public onUpdate(): void {
    let rol: Rol = new Rol();
    rol.rol = this.formGroup.value.rol;
    this._rolService.update(this.rolId, rol).subscribe(
      (res: void) => {
        this.toBack();
      },
      (err) => {}
    );
  }

  public onDelete(): void {
    const confirmation = this._fuseConfirmationService.open({
      title: 'Eliminar Trabajador',
      message: '¿Estas seguro que deseas eliminar el trabajador?',
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
        this._rolService.delete(this.rolId).subscribe(
          (res: void) => {
            this.toBack();
          },
          (err: HttpErrorResponse) => {}
        );
      }
    });
  }

  public toBack(): void {
    this._router.navigate(['rol']);
  }
}
