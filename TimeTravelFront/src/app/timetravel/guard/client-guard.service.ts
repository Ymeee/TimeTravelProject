import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuardService implements CanActivate {
  constructor(private authSrv: AuthenticationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authSrv.isAuthenticated()) {
      if (this.authSrv.isClient()) {
        return true;
      } else {
        return this.router.parseUrl('/probleme/admin');
      }
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
