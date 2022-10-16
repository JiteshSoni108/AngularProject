import { Component, OnInit } from '@angular/core';
import {DailyTask} from '../../DailyTask';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: DailyTask[]= [];
  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((taskData) =>{
    this.tasks=taskData;
    });
  }

  deleteTask(task:DailyTask){
    this.taskService.deleteTask(task).subscribe( (task)=>{
      console.log("in "+task);
      this.tasks=this.tasks.filter( (t) => t.id !== task.id )
    });
  }

  toggleReminder(task:DailyTask){
    task.reminder=!task.reminder;
    //this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: DailyTask){
    console.log(task);
    this.taskService.addTask(task).subscribe((task) =>{
      this.tasks.push(task);
    });
  }
}
