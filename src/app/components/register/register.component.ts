import { Component } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  patient : Patient = new Patient();
  mdp1 ="";
  mdp2 ="";
  x !:number

  constructor(private patientService: PatientService, private router: Router) { }

  verifMDP(): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.x=this.mdp1.length
    if ( this.mdp1== this.mdp2 && emailPattern.test(this.patient.mail)&& this.x>=8 && this.patient.nom!=""&& this.patient.prenom!=""){
      this.patient.mdp=this.mdp1;
      return true ;
    }
    else{
      return false;
    }

  }


  onSubmit(): void {
    // Call the addPatient method from the service and subscribe to the response
    if (this.verifMDP() )
   {console.log(this.patient.mdp);
    console.log(this.patient);
    this.patientService.addPatient(this.patient).subscribe(
      (response: Patient) => {
        console.log('Patient added:', response);
        // Reset the form after successful submission
        this.patient = new Patient();
        this.router.navigate(['/login']);

      },
      error => {
        console.error('Error adding patient:', error);
      }
    );}
    else
    console.log('mdp non identiques')
}


}
