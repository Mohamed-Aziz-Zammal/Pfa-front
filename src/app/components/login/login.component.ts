import { Component } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import {PatientService} from "../../services/patient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  patient = new Patient();
  x !:number



  constructor(private patientService: PatientService, private router: Router) {}

  verifyLogin(){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.x=this.patient.mdp.length
    if(emailPattern.test(this.patient.mail)&& this.x>=8){
      return true;
    }else {
      return false;
    }


  }

  login(username: string, password: string): void {
if(this.verifyLogin()){
  this.patientService.login(username, password).subscribe(
    (response) => {
      // Handle successful login response here
      console.log(response);
      this.patientService.loadProfile(response);

      // Check if the login was successful (you can use your logic here)

      this.router.navigate(['/user']);

    },
    (error) => {
      // Handle error response here
      console.error(error);
    }
  );
}
}



}
