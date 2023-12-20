import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { Trabajador } from 'app/shared/models/trabajador';
import { TrabajadorService } from 'app/shared/services/trabajador.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  public formGroup: FormGroup;
  public trabajadorId: number;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _trabajadorService: TrabajadorService,
    private readonly _formBuilder: FormBuilder,
    private readonly _fuseConfirmationService: FuseConfirmationService
  ) {
    this.formGroup = this._formBuilder.group({
      rut: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.trabajadorId = parseInt(
      this._route.snapshot.paramMap.get('trabajadorId')
    );
    this.getData();
  }

  private getData(): void {
    this._trabajadorService.get(this.trabajadorId).subscribe(
      (res: Trabajador) => {
        this.formGroup.get('rut').setValue(res.rut);
        this.formGroup.get('nombre').setValue(res.nombre);
        this.formGroup.get('apellido').setValue(res.apellido);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public onUpdate(): void {
    let trabajador: Trabajador = new Trabajador();
    trabajador.rut = this.formGroup.value.rut;
    trabajador.nombre = this.formGroup.value.nombre;
    trabajador.apellido = this.formGroup.value.apellido;
    this._trabajadorService.update(this.trabajadorId, trabajador).subscribe(
      (res: void) => {
        this.toBack();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
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
        this._trabajadorService.delete(this.trabajadorId).subscribe(
          (res: void) => {
            this.toBack();
          },
          (err: HttpErrorResponse) => {}
        );
      }
    });
  }

  public formatRut() {
    var sRut1 = this.formGroup.value.rut; //contador de para saber cuando insertar el . o la -
    sRut1 = sRut1.replace(/\.|-/g, '');
    var nPos = 0; //Guarda el rut invertido con los puntos y el guión agregado
    var sInvertido = ''; //Guarda el resultado final del rut como debe ser
    var sRut = '';
    for (var i = sRut1.length - 1; i >= 0; i--) {
      sInvertido += sRut1.charAt(i);
      if (i == sRut1.length - 1) sInvertido += '-';
      else if (nPos == 3) {
        sInvertido += '.';
        nPos = 0;
      }
      nPos++;
    }
    for (var j = sInvertido.length - 1; j >= 0; j--) {
      if (sInvertido.charAt(sInvertido.length - 1) != '.')
        sRut += sInvertido.charAt(j);
      else if (j != sInvertido.length - 1) sRut += sInvertido.charAt(j);
    }
    //Pasamos al campo el valor formateado
    this.formGroup.get('rut').setValue(sRut.toUpperCase());
  }

  public toBack(): void {
    this._router.navigate(['trabajador']);
  }
}
