import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
    return this._toCheck(redirectUrl);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
    return this._toCheck(redirectUrl);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._toCheck('/');
  }

  private async _toCheck(redirectURL: string) {
    const token = await this._authService.accessToken.split('.')[1];
    const json = atob(token);
    const usuario = JSON.parse(json);

    const roles: string = usuario.roles;
    let isAdmin: boolean;

    if (roles == 'admin') {
      isAdmin = true;
    }

    if (!isAdmin) {
      this._router.navigate(['sign-in'], { queryParams: { redirectURL } });
    }

    return isAdmin;
  }
}
