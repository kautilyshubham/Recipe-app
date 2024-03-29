import { Injectable } from '@angular/core';
import { AuthService } from './auth.servise';
import { Observable } from 'rxjs';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService: AuthService){}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot){
                    return this.authService.isAuthenticated();
                }
              

               
}