import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminAuthGuard implements CanActivate {

    constructor(private router: Router, private http: HttpClient) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('currentUser')) {
            let user = JSON.parse(sessionStorage.getItem('currentUser'));
            if(user['role'] == 'Admin'){
                return true;
            }
        }

        this.router.navigate(['/login'], { queryParams: {} });
        return false;
    }
}