import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstHomeComponent } from './components/first-home/first-home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {authenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: FirstHomeComponent  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user' , canActivate : [authenticationGuard] ,
    loadChildren: ()=>
    import('src/app/modules/user/user.module').then((m)=> m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
