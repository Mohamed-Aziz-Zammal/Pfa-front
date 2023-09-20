
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { navbarData } from './sidebar';
import {Patient} from "../../models/Patient";
import {PatientService} from "../../services/patient.service";
//import { navbarData } from 'D:/paf/pfa_front/src/app/components/sidebar/sidebar.ts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navData = navbarData ;
  patient!:Patient ;

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer:BreakpointObserver,private patientService: PatientService){

  }
  ngOnInit() {
    this.getPatientByMail();

  }

  ngAfterViewInit() {

    this.observer
      .observe(['(max-width: 800px)'])
      //.pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });


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
}



