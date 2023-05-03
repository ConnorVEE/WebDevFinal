import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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

  deleteTask(id:string){
    this.http.delete('http://localhost:3000/info/'+id).subscribe(()=>{
      const updatedTasks = this.task.filter(task => task.id !==id)
      this.task = updatedTasks
      this.taskUpDate.next([...this.task])
    })
  }

  addTask(reminder: boolean, text: string, day: string) {
    const task: Task = {id: null, reminder: reminder, text: text, day: day};
    this.http.post<{message:string, infoId:string}>("http://localhost:3000/info", task)
    .subscribe((responseData) => {
      const id = responseData.infoId
      task.id = id
        this.task.push(task)
        this.taskUpDate.next([...this.task])
    })

  }

}
