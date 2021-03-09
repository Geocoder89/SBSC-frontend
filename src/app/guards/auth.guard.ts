import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user) => {
        if (user) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
