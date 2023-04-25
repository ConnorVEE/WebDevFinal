import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

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

  getTasks(): Observable<Task[]> {
    console.log(`TASKS: ${JSON.stringify(this.http.get<Task[]>(this.apiUrl))}`)
    return this.http.get<Task[]>(this.apiUrl)
      .pipe(map((data: any) => data.result ))

  }

  // deleteTask(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.delete<Task>(url);
  // }

  // updateTaskReminder(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.put<Task>(url, task, httpOptions);
  // }

  // addTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiUrl, task, httpOptions);
  // }

}
