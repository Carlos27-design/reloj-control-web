import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { Entrada } from 'app/shared/models/entrada';
import { Registro } from 'app/shared/models/registro';
import { Salida } from 'app/shared/models/salida';
import { EntradaSalidaService } from 'app/shared/services/entrada-salida.service';
import { MapsService } from 'app/shared/services/maps.service';
import { RegistroService } from 'app/shared/services/registro.service';
import { SalidaService } from 'app/shared/services/salida.service';

@Component({
  selector: 'app-entrada-salida',
  templateUrl: './entrada-salida.component.html',
  styleUrls: ['./entrada-salida.component.scss'],
})
export class EntradaSalidaComponent implements OnInit {
  public latitud: string;
  public longitud: string;
  public date: Date;
  public dia: string = '';
  public mes: string = '';
  public anio: number = 0;
  public hora: string = '';
  public minuto: string = '';
  public segundo: string = '';
  public desactivarGuardarEntrada: boolean = false;
  public desactivarGuardarSalida: boolean = false;
  public disabled: boolean = false;
  public trabajador: string;

  constructor(
    private readonly _registroService: RegistroService,
    private readonly _router: Router,
    private readonly _map: MapsService,
    private readonly _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.updateTime();
    this.getUsuario();
  }

  private updateTime(): void {
    this.date = new Date();
    this.date.getDate() < 10
      ? (this.dia = `0${this.date.getDate()}`)
      : (this.dia = `${this.date.getDate()}`);
    this.date.getMonth() + 1 < 10
      ? (this.mes = `0${this.date.getMonth() + 1}`)
      : (this.mes = `${this.date.getMonth() + 1}`);
    this.anio = this.date.getFullYear();
    this.date.getHours() < 10
      ? (this.hora = `0${this.date.getHours()}`)
      : (this.hora = `${this.date.getHours()}`);
    this.date.getMinutes() < 10
      ? (this.minuto = `0${this.date.getMinutes()}`)
      : (this.minuto = `${this.date.getMinutes()}`);
    this.date.getSeconds() < 10
      ? (this.segundo = `0${this.date.getSeconds()}`)
      : (this.segundo = `${this.date.getSeconds()}`);

    setTimeout(() => {
      this.updateTime();
    }, 1000);
  }

  private async getUsuario() {
    const payload = await this._authService.accessToken.split('.')[1];
    const json = atob(payload);
    const usuario = JSON.parse(json);
    this.trabajador = usuario.trabajador;
    console.log(this.trabajador);
  }

  public registrarEntrada(): void {
    this.desactivarGuardarEntrada = true;
    let registro: Registro = new Registro();
    this._map.getPosition().then((pos) => {
      registro.latitudEntrada = pos.lat;
      registro.longitudEntrada = pos.lng;
      registro.fecha = new Date();
      registro.entrada = new Date();

      console.log(registro);
      this._registroService.create(registro).subscribe(
        (res) => {
          this.toBack();
        },
        (err) => {
          this.desactivarGuardarEntrada = false;
        }
      );
    });
  }

  public registrarSalida(): void {
    this.desactivarGuardarSalida = true;
    let registro: Registro = new Registro();
    this._map.getPosition().then((pos) => {
      registro.latitudSalida = pos.lat;
      registro.longitudSalida = pos.lng;
      registro.fecha = new Date();
      registro.salida = new Date();
      this._registroService.create(registro).subscribe(
        (res) => {
          this.toBack();
        },
        (err) => {
          this.desactivarGuardarSalida = false;
        }
      );
    });
  }

  public toVerEntrada() {
    this._router.navigate(['entradaSalida/ver']);
  }

  private toBack(): void {
    this._router.navigate(['entradaSalida']);
  }
}
