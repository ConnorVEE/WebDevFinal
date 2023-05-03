import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  private taskSub:Subscription;

  ngOnInit(): void {

    this.taskService.getMyTask()
    this.taskSub = this.taskService.getUpdateListener().subscribe((task:Task[])=>{
      this.tasks = task;
    })

  }

  // deleteTask(task: Task) {
  //   this.taskService
  //     .deleteTask(task)
  //     .subscribe(() => (this.tasks = this.tasks.filter((t) => t._id !== task._id) ));
  // }

  onDelete(id: string) {
    this.taskService.deleteTask(id)
  }


  ngOnDestroy(): void {
    this.taskSub.unsubscribe()
  }



}
