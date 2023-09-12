import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationService } from './service/basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    public basicAuthenticationService:BasicAuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.hardcodedAuthenticationService.isUserLogedIn()) 
     if (this.basicAuthenticationService.isUserLogedIn()) 

      return true;
      this.router.navigate(['login']);
      
    return false;
  }
}
