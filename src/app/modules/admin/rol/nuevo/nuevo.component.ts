import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'app/shared/models/rol';
import { RolService } from 'app/shared/services/rol.service';

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
    private readonly _rolService: RolService,
    private readonly _formBuilder: FormBuilder
  ) {
    this.formGroup = this._formBuilder.group({
      rol: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    let rol: Rol = new Rol();
    rol.rol = this.formGroup.value.rol;
    this._rolService.create(rol).subscribe(
      (res: Rol) => {
        this.toBack();
      },
      (err) => {}
    );
  }

  public toBack(): void {
    this._router.navigate(['rol']);
  }
}
