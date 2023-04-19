import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';

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

  getTasks() {
    this.http.get<{post:any}>(this.apiUrl);

  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
