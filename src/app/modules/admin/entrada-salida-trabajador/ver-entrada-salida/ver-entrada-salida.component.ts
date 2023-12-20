import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from 'app/shared/models/registro';
import { Trabajador } from 'app/shared/models/trabajador';
import { ExportarHorasTrabajadorService } from 'app/shared/services/excel-service/exportar-horas-trabajador.service';
import { TrabajadorService } from 'app/shared/services/trabajador.service';

@Component({
  selector: 'app-ver-entrada-salida',
  templateUrl: './ver-entrada-salida.component.html',
  styleUrls: ['./ver-entrada-salida.component.scss'],
})
export class VerEntradaSalidaComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['Fecha', 'Entrada', 'Salida'];
  public dataSource = new MatTableDataSource<Registro>();
  public resultLenght = 0;
  public trabajadorId: number;
  public trabajador: Trabajador;

  @ViewChild(MatSort)
  public sort: MatSort;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(
    private readonly _trabajadorService: TrabajadorService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _exportarHorasTrabajadorService: ExportarHorasTrabajadorService
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.trabajadorId = parseInt(
      this._route.snapshot.paramMap.get('trabajadorId')
    );
    this.getData();
  }

  private getData() {
    this._trabajadorService.get(this.trabajadorId).subscribe(
      (res: Trabajador) => {
        this.trabajador = res as Trabajador;
        this.dataSource.data = this.trabajador.Registros;
        this.resultLenght = this.dataSource.data.length;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public exportarAExcel(): void {
    this._exportarHorasTrabajadorService.exportarExcel(
      this.trabajador.Registros
    );
  }

  public toBack(): void {
    this._router.navigate(['entradaSalidaTrabajador']);
  }
}
