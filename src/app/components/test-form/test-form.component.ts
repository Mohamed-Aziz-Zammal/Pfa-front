import { Component } from '@angular/core';
import { Questions } from './questions';
import { Test } from 'src/app/models/Test';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/Patient';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {

  questions = Questions ;
  questionIndex = 0 ;
  question = this.questions[this.questionIndex] ;
  score = 0 ;
  reponse = 0 ;
  result = false ;
  patient = new Patient();
  test = new Test() ;

  constructor(private patientService: PatientService ,
    private testService: TestService
    ){}

  ngOnInit(): void {
    this.getPatientByMail();

  }


  getPatientByMail(){
    this.patientService.getPatientByMail(this.patientService.username).subscribe(
      (data: Patient) => {
        // Check if data is defined before assigning it
        if (data) {
          this.patient = data;

        }
      },
      (error) => {
        console.error('Error fetching patient:', error);
      }
    );

  }
  getPatientById(id: number): void {
    this.patientService.getPatientById(id).subscribe(
      data => {
        console.log("Patient", data);
        this.patient = data;
      }
    );
  }

  addTest(): void {

    this.test.patient = this.patient ;
    this.test.score = this.score*10 ;

    this.testService.addTest(this.test)
      .subscribe(test => {
        console.log("test saved !" , this.test);
      });
    }


  verifyReponse(){
    if(this.reponse == this.question.correct)
    this.score ++ ;
  }

  setReponse(index : number)
  {
    this.reponse = index ;
  }

  nextQuestion(){
    if(this.questionIndex == 9)
    {
      this.verifyReponse();
      this.result = true ;
      this.addTest();

    }
    else
    { this.verifyReponse();
      this.questionIndex ++ ;
      this.question = this.questions[this.questionIndex] ;

    }
  }

}
