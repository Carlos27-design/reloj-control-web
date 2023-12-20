import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaSalidaTrabajadorComponent } from './entrada-salida-trabajador.component';
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
import { Route, RouterModule } from '@angular/router';
import { VerEntradaSalidaComponent } from './ver-entrada-salida/ver-entrada-salida.component';
import { RecursoHumanoGuard } from 'app/core/auth/guards/recurso-humano.guard';

const entradaSalidaTrabajador: Route[] = [
  {
    path: '',
    canActivate: [RecursoHumanoGuard],
    component: EntradaSalidaTrabajadorComponent,
  },
  {
    path: 'verEntradaSalida',
    canActivate: [RecursoHumanoGuard],
    component: VerEntradaSalidaComponent,
  },
];

@NgModule({
  declarations: [EntradaSalidaTrabajadorComponent, VerEntradaSalidaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(entradaSalidaTrabajador),
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
export class EntradaSalidaTrabajadorModule {}
