import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FuseLoadingService } from '@fuse/services/loading';
import { Trabajador } from 'app/shared/models/trabajador';
import { TrabajadorService } from 'app/shared/services/trabajador.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.scss'],
})
export class TrabajadorComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = [
    'Rut',
    'Nombre',
    'Apellido',
    'Creado',
    'Actualizado',
  ];
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

  public toNuevo(): void {
    this._router.navigate(['trabajador/nuevo']);
  }

  public toModificar(row: Trabajador): void {
    this._router.navigate(['trabajador/modificar', { trabajadorId: row.id }]);
  }
}
