import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Subject } from 'rxjs';

import {Task} from '../Task';

import { text } from '@fortawesome/fontawesome-svg-core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:3000/info'

  constructor(private http:HttpClient) { }

  private taskUpDate = new Subject<Task[]>

  private task: Task[]=[]

  getUpdateListener(){
    return this.taskUpDate.asObservable()
  }

  getMyTask() {
    this.http.get<{message:string, task: any}>('http://localhost:3000/info').pipe(map((data)=>{
      return data.task.map(task=>{
        return{
          reminder:task.reminder,
          text:task.text,
          day:task.day

        }
      })
    }))
    .subscribe((transformedTask)=>{
    this.task =  transformedTask;
    this.taskUpDate.next([...this.task])
    })
  }

  deleteTask(taskID:string){
    this.http.delete('http://localhost:3000/info/'+taskID).subscribe(()=>{


    })
  }

  // updateTaskReminder(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.put<Task>(url, task, httpOptions);
  // }

  // addTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiUrl, task, httpOptions);
  // }

}
