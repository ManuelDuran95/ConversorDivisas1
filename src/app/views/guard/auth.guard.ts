import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){ }
  canActivate(){    
    if (this.authService.isLoggedIn()==true) {
      
      return true;
    }
    else{
      this.router.navigate(['login']);

      return true;

    }
    

  }
  
}
