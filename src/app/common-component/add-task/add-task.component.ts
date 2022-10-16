import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { DailyTask } from '../../DailyTask';
import { UiService } from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<DailyTask> = new EventEmitter();
  text:string;
  day:string;
  reminder:boolean;
  showAddTask:boolean;
  subscription:Subscription;
  
  constructor(private uiService:UiService) { 
    this.subscription= this.uiService.onToggle().subscribe((value) =>{
      this.showAddTask=value;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please Add Task");
      return;
    }

    if(!this.day){
      alert("Please Add Date & Time");
      return;
    }

    const newTask={
      text: this.text,
      day: this.day,
      reminder : this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text=""; this.day=""; this.reminder=false;
  }
}
