import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FirstHomeComponent } from './components/first-home/first-home.component';
import { RegisterComponent } from './components/register/register.component';
//import { UserSpaceComponent } from './components/user-space/user-space.component';
//import { FicheUserComponent } from './components/fiche-user/fiche-user.component';
//import { TestFormComponent } from './components/test-form/test-form.component';
//import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForumComponent } from './components/forum/forum.component';

import { UserModule } from './modules/user/user.module';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { TestsComponent } from './components/tests/tests.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor"; // Import the MatSidenavModule and other modules


//import { SidebarComponent } from './components/sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    FirstHomeComponent,
    RegisterComponent,
 //   UserSpaceComponent,
   // FicheUserComponent,
    //TestFormComponent,
    //NavbarUserComponent,
    ForumComponent,
 TestsComponent,

   // SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    FormsModule,
    MatSidenavModule, // Include MatSidenavModule here
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : AppHttpInterceptor , multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
