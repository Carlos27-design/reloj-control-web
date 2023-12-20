import { Component, OnInit } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { clone, cloneDeep } from 'lodash';
import { AuthService } from './core/auth/auth.service';
import { defaultNavigation } from './mock-api/common/navigation/data';
import { MapsService } from './shared/services/maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Constructor
   */
  menu: FuseNavigationItem[] = [];
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    const payload = this._authService.accessToken.split('.')[1];
    const json = atob(payload);
    const usuario = JSON.parse(json);

    const roles = usuario.roles;

    let isAdmin: boolean = false;
    let isRecursoHumano: boolean = false;
    let isTerreno: boolean = false;

    if (roles === 'admin') {
      isAdmin = true;
    }
    if (roles === 'recurso-humanos') {
      isRecursoHumano = true;
    }
    if (roles === 'terreno') {
      isTerreno = true;
    }

    this.menu = [
      {
        id: 'usuario',
        title: 'Usuario',
        type: 'basic',
        icon: 'heroicons_outline:view-list',
        link: '/usuario',
        hidden: () => !isAdmin,
      },
      {
        id: 'trabajador',
        title: 'Trabajador',
        type: 'basic',
        icon: 'heroicons_outline:view-list',
        link: '/trabajador',
        hidden: () => !isAdmin && !isRecursoHumano,
      },
      {
        id: 'entradaSalida',
        title: 'Entrada y Salida',
        type: 'basic',
        icon: 'heroicons_outline:clock',
        link: '/entradaSalida',
        hidden: () => !isAdmin && !isRecursoHumano && !isTerreno,
      },
      {
        id: 'rol',
        title: 'Rol',
        type: 'basic',
        icon: 'heroicons_outline:view-list',
        link: '/rol',
        hidden: () => !isAdmin,
      },
      {
        id: 'entradaSalidaTrabajador',
        title: 'Entrada y Salida Trabajador',
        type: 'basic',
        icon: 'heroicons_outline:view-list',
        link: 'entradaSalidaTrabajador',
        hidden: () => !isAdmin && !isRecursoHumano,
      },
    ];
  }
}
