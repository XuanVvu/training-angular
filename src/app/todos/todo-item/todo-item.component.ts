import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() data: any | undefined;
  modal: boolean | undefined;

  todoForm: FormGroup |any;

  constructor(private todoService:TodosService, private fb: FormBuilder) {}

  removeTodo() {
    this.todoService.removeTodo(this.data.id);
  }

  navigateEdit() {
    this.modal = !this.modal;
    this.todoForm = this.fb.group({
      todo: this.data.todo,
      status: this.data.status
    })
  }

  updateTodo() {
    this.todoService.updateTodo(this.data.id,this.todoForm.value);
    this.modal = !this.modal;
    
  }
}
