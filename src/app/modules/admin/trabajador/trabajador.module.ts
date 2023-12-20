import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadorComponent } from './trabajador.component';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from 'app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { RecursoHumanoGuard } from 'app/core/auth/guards/recurso-humano.guard';
import { AdminGuard } from 'app/core/auth/guards/admin.guard';

const trabajadorRouting: Route[] = [
  {
    path: '',
    canActivate: [RecursoHumanoGuard],
    component: TrabajadorComponent,
  },
  {
    path: 'nuevo',
    canActivate: [AdminGuard],
    component: NuevoComponent,
  },
  {
    path: 'modificar',
    canActivate: [AdminGuard],
    component: ModificarComponent,
  },
];

@NgModule({
  declarations: [TrabajadorComponent, NuevoComponent, ModificarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(trabajadorRouting),
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    SharedModule,
    MatInputModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    FuseHighlightModule,
  ],
})
export class TrabajadorModule {}
