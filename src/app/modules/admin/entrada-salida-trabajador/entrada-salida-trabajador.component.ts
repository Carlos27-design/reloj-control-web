import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trabajador } from 'app/shared/models/trabajador';
import { TrabajadorService } from 'app/shared/services/trabajador.service';

@Component({
  selector: 'app-entrada-salida-trabajador',
  templateUrl: './entrada-salida-trabajador.component.html',
  styleUrls: ['./entrada-salida-trabajador.component.scss'],
})
export class EntradaSalidaTrabajadorComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['Trabajador'];
  public dataSource = new MatTableDataSource<Trabajador>();
  public resultsLenght = 0;

  @ViewChild(MatSort)
  public sort: MatSort;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(
    private readonly _trabajadorService: TrabajadorService,
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
    this._trabajadorService.getAll().subscribe(
      (res: Trabajador[]) => {
        this.dataSource.data = res;
        this.resultsLenght = this.dataSource.data.length;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public toVer(row: Trabajador): void {
    this._router.navigate([
      'entradaSalidaTrabajador/verEntradaSalida',
      { trabajadorId: row.id },
    ]);
  }
}
