import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.service.isAuth())
    {
      return true;
    }
    else{
      this.router.navigate(['/login']);
    }
  }


  constructor(private service:AuthService,private router:Router)
  {

  }
  
}
