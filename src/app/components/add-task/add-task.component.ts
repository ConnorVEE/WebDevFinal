import { Component, Output, EventEmitter } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { TaskService } from 'src/app/services/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(public uiService: UiService, public taskService: TaskService) {

    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value);

  }

  // ngOnInit(): void {

  // }

  onSubmit(form: NgForm) {

  if(form.invalid) {
    return;
  }

  this.taskService.addTask(form.value.reminder, form.value.text, form.value.day)
  form.resetForm();
  }

  }
