import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from 'app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { Route, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { AdminGuard } from 'app/core/auth/guards/admin.guard';

const usuarioRouting: Route[] = [
  {
    path: '',
    canActivate: [AdminGuard],
    component: UsuarioComponent,
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
  declarations: [UsuarioComponent, NuevoComponent, ModificarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    SharedModule,
    MatInputModule,
    RouterModule.forChild(usuarioRouting),
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    FuseHighlightModule,
  ],
})
export class UsuarioModule {}
