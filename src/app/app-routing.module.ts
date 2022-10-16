import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './common-component/tasks/tasks.component';
import { ForgotPasswordComponent } from './user-auth/forgot-password/forgot-password.component';
import { LoginComponent } from './user-auth/login/login.component';
import { NotFoundComponent } from './user-auth/not-found/not-found.component';

const routes: Routes = [
  {
    path:'' , component: TasksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
