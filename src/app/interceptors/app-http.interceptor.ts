import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {PatientService} from "../services/patient.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private patientService : PatientService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes('/login') && !request.url.includes('/patients/addPatient'))
    {
      let newRequest = request.clone(
        {headers: request.headers.set('Authorization', 'Bearer ' + this.patientService.accessToken)}
      );
      return next.handle(newRequest);
    }
    else{
      return next.handle(request );
    }

  }
}
