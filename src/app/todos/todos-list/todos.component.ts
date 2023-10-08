import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosListComponent implements OnInit {
  inputTodo: string | undefined;
  todos: any[] | undefined;
  constructor(private todosService: TodosService) {}
  ngOnInit(): void {
      this.todosService.todos$.subscribe((data) => this.todos = data)
  }

  data($event: any) {
    this.inputTodo = $event;
  }

  handleAddTodo() {
    if(this.inputTodo) {
      this.todosService.addTodos(this.inputTodo);
    }

    if (this.todos) {
      console.log(this.todos);

    }

  }
}
