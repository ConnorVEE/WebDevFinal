import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  private taskSub:Subscription;

  ngOnInit(): void {

    this.taskService.getMyTask()
    this.taskSub = this.taskService.getUpdateListener().subscribe((task:Task[])=>{
      this.tasks = task;
    })

  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => (this.tasks = this.tasks.filter((t) => t._id !== task._id) ));
  }

  toggleReminder(task: Task) {
    // task.reminder = !task.reminder;
    // this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    // this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
