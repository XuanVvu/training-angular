import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private idCounter = 1;
  private todos: any[] = [];
  private todosSubject: Subject<any> = new Subject();

  get todos$() {
    return this.todosSubject.asObservable();
  }

  addTodos(todo: any) {
    const newTodo = {
      id: this.idCounter++,
      todo,
    };
    this.todos.push(newTodo);
    this.todosSubject.next([...this.todos]);
  }

  removeTodo(id: number) {    
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next([...this.todos]);
  }
}
