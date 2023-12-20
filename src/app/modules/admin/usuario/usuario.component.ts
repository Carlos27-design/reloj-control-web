import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'app/shared/models/usuario';
import { UsuarioService } from 'app/shared/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = [
    'Email',
    'Rol',
    'Trabajador',
    'Creado',
    'Actualizado',
  ];

  public dataSource = new MatTableDataSource<Usuario>();
  public resultsLenght = 0;

  @ViewChild(MatSort)
  public sort: MatSort;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(
    private readonly _usuarioService: UsuarioService,
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
    this._usuarioService.getAll().subscribe(
      (res: Usuario[]) => {
        this.dataSource.data = res;
        this.resultsLenght = this.dataSource.data.length;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  public toNuevo(): void {
    this._router.navigate(['usuario/nuevo']);
  }

  public toModificar(row: Usuario): void {
    this._router.navigate(['usuario/modificar', { usuarioId: row.id }]);
  }
}
