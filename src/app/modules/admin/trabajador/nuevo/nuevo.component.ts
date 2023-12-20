import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabajador } from 'app/shared/models/trabajador';
import { TrabajadorService } from 'app/shared/services/trabajador.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent implements OnInit {
  public formGroup: FormGroup;
  public desactivarGuardar: boolean = false;

  constructor(
    private readonly _router: Router,
    private readonly _trabajadorService: TrabajadorService,
    private readonly _formBuilder: FormBuilder
  ) {
    this.formGroup = this._formBuilder.group({
      rut: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    let trabajador: Trabajador = new Trabajador();
    trabajador.rut = this.formGroup.value.rut;
    trabajador.nombre = this.formGroup.value.nombre;
    trabajador.apellido = this.formGroup.value.apellido;
    this._trabajadorService.create(trabajador).subscribe(
      (res: Trabajador) => {
        this.toBack();
      },
      (err: HttpErrorResponse) => {
        this.formGroup.get('rut').setValue('');
        this.formGroup.get('nombre').setValue('');
        this.formGroup.get('apellido').setValue('');
      }
    );
  }

  public toBack(): void {
    this._router.navigate(['trabajador']);
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
}
