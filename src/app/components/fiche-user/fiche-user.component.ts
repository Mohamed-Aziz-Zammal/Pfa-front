import { Component ,ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Fiche } from 'src/app/models/Fiche';
import { Patient } from 'src/app/models/Patient';
import { FicheService } from 'src/app/services/fiche.service';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-fiche-user',
  templateUrl: './fiche-user.component.html',
  styleUrls: ['./fiche-user.component.css']
})
export class FicheUserComponent {
  tabetude=["Primaire","Collège","Lycée","Universitaire"]

  patient = new Patient();
  fiche = new Fiche();

  patientID = 1 ;
  selectedItem= this.fiche.niveau_etude;

  constructor(private patientService: PatientService,private ficheService: FicheService,private changeDetector: ChangeDetectorRef) { }

  // Call this method when you want to trigger change detection


    ngOnInit() {
    this.getPatientByMail();
    console.log('22',this.patient);
      // this.getPatientById(this.patientID);
          this.fiche = this.patient.fiche;
          this.selectedItem = this.fiche.niveau_etude;

  }

  getPatientByMail(){
    this.patientService.getPatientByMail(this.patientService.username).subscribe(
      (data: Patient) => {
        // Check if data is defined before assigning it
        if (data) {
          this.patient = data;
          this.getFicheById(this.patient?.fiche.id) ;
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

        // Assign the fiche information after the patient data is fetched
        this.getFicheById(this.patient?.fiche.id) ;

        // Now you can log the fiche information

      }
    );
  }

  getFicheById(id: number): void {
    this.ficheService.getFicheById(id).subscribe(
      data => {
        console.log("Fiche", data);
        this.fiche = data;

        // Assign the fiche information after the patient data is fetched


        // Now you can log the fiche information

      }
    );
  }

  /*updateFiche( ) {
    console.log("new fichr",this.fiche)
    this.ficheService.updateFiche(this.fiche.id, this.fiche).subscribe(
      data => {
        // Handle success response
        console.log('Fiche updated successfully:', data);
        this.ngOnInit() ;

      },
      error => {
        // Handle error response
        console.error('Failed to update Fiche:', error);
        alert("Impossible de modifier le Fiche!");
      }
    );
  }*/

vTel(){
  if(this.fiche.tel.length==8){
    return true
  }else return false
}
  updateFiche() {
  if (this.vTel()){
    console.log("new fiche", this.fiche);
    this.ficheService.updateFiche(this.fiche.id, this.fiche).subscribe(
      data => {
        // Handle success response
        console.log('Fiche updated successfully:', data);
        this.ngOnInit();
      },
      error => {
        // Handle error response
        console.error('Failed to update Fiche:', error);
        alert("Impossible de modifier le Fiche!");
      }
    );

    // Trigger change detection after updating the fiche object
    this.changeDetector.detectChanges();

  }

  }

  onselect(e:any){
    this.selectedItem=e.target.value;

    this.fiche.niveau_etude = this.selectedItem;

  }


}
