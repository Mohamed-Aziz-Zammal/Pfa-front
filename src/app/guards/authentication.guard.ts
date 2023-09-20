import {CanActivateFn, Router} from "@angular/router";
import {PatientService} from "../services/patient.service";
import {HttpClient} from "@angular/common/http";



export const authenticationGuard: CanActivateFn = (route, state) => {
  /*const patientService = new PatientService(); // Instantiate your PatientService or inject it as needed

  if (patientService.isAuthenticated === true) {
    return true;
  } else {
    // Replace 'Router' with your router instance if needed
    const router = new Router();
    router.navigate(['/login']);
    return false;
  }*/
  return true ;
};


/*export class AuthenticationGuard implements  CanActivate{
  constructor(private patientService : PatientService , private router : Router) {

  }
  canActivate(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot ) : Observable<boolean| UrlTree> | Promise<boolean|UrlTree> | boolean |UrlTree {
    if(this.patientService.isAuthenticated == true)
    {
      return  true ;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}*/
