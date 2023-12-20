import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Entrada } from 'app/shared/models/entrada';
import { Registro } from 'app/shared/models/registro';
import { EntradaSalidaService } from 'app/shared/services/entrada-salida.service';
import { ExportarMisHorasService } from 'app/shared/services/excel-service/exportar-mis-horas.service';
import { RegistroService } from 'app/shared/services/registro.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss'],
})
export class VerComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['Fecha', 'Entrada', 'Salida'];
  public dataSource = new MatTableDataSource<Entrada>();
  public resultsLenght = 0;
  public registros: Registro[] = [];

  @ViewChild(MatSort)
  public sort: MatSort;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(
    private readonly _registroService: RegistroService,
    private readonly _exportarMisHoraService: ExportarMisHorasService,
    private readonly _router: Router
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this._registroService.getAll().subscribe(
      (res: Registro[]) => {
        this.dataSource.data = res;
        this.resultsLenght = this.dataSource.data.length;
        this.registros = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public exportAExcel(): void {
    this._exportarMisHoraService.exportarExcel(this.registros);
  }

  public toBack(): void {
    this._router.navigate(['entradaSalida']);
  }
}
