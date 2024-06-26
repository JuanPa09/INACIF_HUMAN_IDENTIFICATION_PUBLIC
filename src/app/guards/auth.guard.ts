import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const internalNavigation = this.isInternalNavigation();
    
    if (!internalNavigation) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

  private isInternalNavigation(): boolean {
    const referer = document.referrer;
    const origin = window.location.origin;
    return referer ? referer.startsWith(origin) ? true : false : false;
  }
}
