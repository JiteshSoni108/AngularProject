import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { DailyTask } from '../DailyTask';
import { Observable ,of } from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';


const httpOptions={
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl="http://localhost:5000/tasks";
  tasks: DailyTask[]= TASKS;

  constructor(private https:HttpClient) { }

  getTask(): Observable<DailyTask[]>{
     return this.https.get<DailyTask[]>(this.apiUrl);
  }

  deleteTask(task:DailyTask) : Observable<DailyTask>{
    const url = '${this.apiUrl}/${task.id}';
    let output:DailyTask=task;
    this.getTask().subscribe((taskData) =>{
      taskData.forEach(data =>{
        if(data.id !=task.id){
          output=data;
        }
      });
      });
    return of(output);
  }

  updateTaskReminder(task:DailyTask) : Observable<DailyTask>{
    const url = '${this.apiUrl}/${task.id}';
    return this.https.put<DailyTask>(url,task,httpOptions);
  }

  addTask(task:DailyTask): Observable<DailyTask>{
    return this.https.post<DailyTask>(this.apiUrl, task,httpOptions);
  }
}
