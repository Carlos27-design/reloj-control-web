import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Rol } from 'app/shared/models/rol';
import { RolService } from 'app/shared/services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss'],
})
export class RolComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['Rol', 'Creado', 'Actualizado'];
  public dataSource = new MatTableDataSource<Rol>();
  public resultsLenght = 0;

  @ViewChild(MatSort)
  public sort: MatSort;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(
    private readonly _rolService: RolService,
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
    this._rolService.getAll().subscribe(
      (res: Rol[]) => {
        this.dataSource.data = res;
        this.resultsLenght = this.dataSource.data.length;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public toNuevo(): void {
    this._router.navigate(['rol/nuevo']);
  }

  public toModificar(row: Rol): void {
    this._router.navigate(['rol/modificar', { rolId: row.id }]);
  }
}
