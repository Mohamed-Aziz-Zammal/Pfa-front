import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheUserComponent } from 'src/app/components/fiche-user/fiche-user.component';
import { ForumComponent } from 'src/app/components/forum/forum.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { TestFormComponent } from 'src/app/components/test-form/test-form.component';
import { TestsComponent } from 'src/app/components/tests/tests.component';
import { UserSpaceComponent } from 'src/app/components/user-space/user-space.component';

const routes: Routes = [
  {
    path: '',component: UserSpaceComponent,
    children: [
      { path: '' , redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: FicheUserComponent }, 
      { path: 'test', component: TestFormComponent }, 
      { path: 'forum', component: ForumComponent},
      { path: 'tests', component: TestsComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
