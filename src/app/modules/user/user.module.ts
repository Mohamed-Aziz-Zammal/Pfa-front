import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserSpaceComponent } from 'src/app/components/user-space/user-space.component';
import { FicheUserComponent } from 'src/app/components/fiche-user/fiche-user.component';
import { TestFormComponent } from 'src/app/components/test-form/test-form.component';
import { NavbarUserComponent } from 'src/app/components/navbar-user/navbar-user.component';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserSpaceComponent,
    FicheUserComponent,
    TestFormComponent,
    NavbarUserComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    MatDividerModule, 
    FormsModule,
  ]
})
export class UserModule { }
