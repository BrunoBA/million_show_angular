import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ForceLogoutGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.hasToken()) {
      const deleteParamns = {
        id: this.authService.getToken(),
        questionId: next.paramMap.get('questionId')
      }

      this.userService.delete(deleteParamns).subscribe(
        response => {
          if (response.data) {
            this.authService.removeToken()
          }
        },
        err => {}
      )
    }

    return true;
  }

}
