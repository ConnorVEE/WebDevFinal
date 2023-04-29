import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Task} from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit{
  @Input() task: Task = {} as Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor(public taskService: TaskService){

  }


  faTimes = faTimes;



  ngOnInit(): void { }

  onDelete(id: string) {
    // this.onDeleteTask.emit(id);
    this.taskService.deleteTask(id)
  }

  onToggle(task) {

  }

}
