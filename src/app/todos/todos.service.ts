import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private idCounter = 1;
  private todos: any[] = [];
  private todosSubject: BehaviorSubject<any> = new BehaviorSubject([]);

  get todos$() {
    return this.todosSubject.asObservable();
  }

  getTodoById(id: number) {
    return this.todosSubject.asObservable().pipe(
      map((todo) => todo.find((t: any) => t.id === id))
    );
  }

  addTodos(todo: any) {
    const newTodo = {
      id: this.idCounter++,
      status: false,
      todo,
    };
    this.todos = [...this.todos, newTodo]
    this.todosSubject.next(this.todos);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todosSubject.next([...this.todos]);
  }

  updateTodo(id: number,todo: any) {
      const todoUpdate = this.todos.find(item => item.id === id);
      if(todoUpdate) {
        todoUpdate.todo = todo.todo;
        todoUpdate.status = todo.status;
        this.todosSubject.next([...this.todos]);
      }

  }
}
