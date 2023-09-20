import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/Commentaire';
import { Patient } from 'src/app/models/Patient';
import { CommentaireService } from 'src/app/services/commentaires.service';
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
 addComent = false ;
 profile = false;
 editComent=false;
 patient !: Patient ;
 commentaires: Commentaire[] = [];
 commentaire = new Commentaire() ;



 constructor(
  private commentaireService: CommentaireService,
  private cdr: ChangeDetectorRef ,
  private  patientService : PatientService) { }

  ngOnInit(): void {
    this.getAllCommentaires();
    this.getPatientByMail() ;
  }



  AddComent(){
    this.addComent = !this.addComent ;
 }
 EditComent(){
  this.editComent = !this.editComent ;
 }

  changeProfile(state:boolean){
    this.profile = state ;
  }

  getAllCommentaires(): void {
    this.commentaireService.getAllCommentaires()
      .subscribe(commentaires => {
        this.commentaires = commentaires;
      });
      this.changeProfile(false);
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
  getAllCommentairesByPatient(id : number): void {
    this.commentaireService.getAllCommentairesByPatient(id)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
      });
      this.changeProfile(true);
  }

  addCommentaire(): void {

    this.commentaire.patient = new Patient();
    this.commentaire.patient.id = this.patient.id ;
    // ...

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';
const formattedDate = `${hours % 12}:${minutes} ${ampm}, ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
this.commentaire.date = formattedDate;

    this.commentaireService.addCommentaire(this.commentaire)
      .subscribe(commentaire => {
        this.commentaires.push(commentaire);
        this.AddComent() ;
      });

  }


  updateCommentaire(id: number, comment: Commentaire) {
    this.commentaireService.updateCommentaire(id, comment).subscribe(
      data => {
        // Handle success response
        console.log('Comment updated successfully:', data);
        this.getAllCommentairesByPatient(this.patient.id) ;

      },
      error => {
        // Handle error response
        console.error('Failed to update Commentaire:', error);
        alert("Impossible de modifier le Commentaire!");
      }
    );
  }


  onDeleteCommentaire(id: number): void {
    this.commentaireService.deleteCommentaire(id).subscribe(
      () => {
        console.log(`Commentaire with ID ${id} deleted successfully.`);
        // Add any additional actions you want after successful deletion
        this.getAllCommentairesByPatient(this.patient.id) ;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error deleting commentaire:', error);
        // Handle error if necessary
      }
    );

  }


}
