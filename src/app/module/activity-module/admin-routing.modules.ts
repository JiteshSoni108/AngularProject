import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from 'src/app/common-component/tasks/tasks.component';
import { TASKS } from 'src/app/mock-tasks';

const routes: Routes = [
  {
    path:'' , component:TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
