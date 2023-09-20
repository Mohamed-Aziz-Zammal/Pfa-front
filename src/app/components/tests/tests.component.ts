import { Component } from '@angular/core';
import { Test } from 'src/app/models/Test';
import { TestService } from 'src/app/services/test.service';
import {Patient} from "../../models/Patient";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {

  tests: Test[] = [];
  patient = new Patient() ;

  constructor(
    private testService: TestService ,
    private patientService : PatientService
    ){}

  ngOnInit(): void {
    this.getPatientByMail() ;
    //this.getAllTestsByPatient();
  }

  getPatientByMail(){
    this.patientService.getPatientByMail(this.patientService.username).subscribe(
      (data: Patient) => {
        // Check if data is defined before assigning it
        if (data) {
          this.patient = data;
          this.getAllTestsByPatient(data.id) ;

        }
      },
      (error) => {
        console.error('Error fetching patient:', error);
      }
    );

  }

  getAllTestsByPatient(id : number): void {

    this.testService.getAllTestsByPatient(id)
      .subscribe(tests => {
        this.tests = tests;
      });
  }

}
