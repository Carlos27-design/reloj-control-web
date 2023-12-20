import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolComponent } from './rol.component';
import { Route, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { AdminGuard } from 'app/core/auth/guards/admin.guard';

const RolRouting: Route[] = [
  {
    path: '',
    canActivate: [AdminGuard],
    component: RolComponent,
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
  declarations: [RolComponent, NuevoComponent, ModificarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RolRouting),
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
export class RolModule {}
