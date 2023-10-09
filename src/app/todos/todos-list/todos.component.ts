import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosListComponent implements OnInit {
  inputTodo: string | undefined;
  todos: any[] | undefined;
  todoForm: FormGroup | any;
  sup= new Subscription()

  constructor(private todosService: TodosService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      todoInput: ['', Validators.compose([Validators.required])],
    });
    this.todosService.todos$.subscribe((data) => this.todos = data)

  }

  handleAddTodo() {
    const input = this.todoForm.value.todoInput;
    if (input) {
      this.todosService.addTodos(input);
    }
    this.todoForm.patchValue({
      todoInput: '',
    });
  }
}
