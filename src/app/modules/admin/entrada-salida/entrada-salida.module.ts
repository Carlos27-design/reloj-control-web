import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EntradaSalidaComponent } from './entrada-salida.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from 'app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { VerComponent } from './ver/ver.component';

const entradaSalidaRouting: Route[] = [
  {
    path: '',
    component: EntradaSalidaComponent,
  },
  {
    path: 'ver',
    component: VerComponent,
  },
];

@NgModule({
  declarations: [VerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(entradaSalidaRouting),
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
export class EntradaSalidaModule {}
