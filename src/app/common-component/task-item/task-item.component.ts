import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { DailyTask } from 'src/app/DailyTask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: DailyTask;
  @Output() onDeleteTask: EventEmitter<DailyTask>= new EventEmitter();
  @Output() onToggleReminder: EventEmitter<DailyTask>= new EventEmitter();
  fatimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: DailyTask){
    this.onDeleteTask.emit(task);
  }

  onToggle(task : DailyTask){
    this.onToggleReminder.emit(task);
  }
}
