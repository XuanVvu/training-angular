import { Routes } from '@angular/router';
import { TodosListComponent } from './todos-list/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

export const todosRoutes: Routes = [
  {
    path: '',
    component: TodosListComponent,
  },
  {
    path:':id',
    children: [
      {
        path: 'edit',
        component: TodoDetailComponent

      }
    ]
  }
];
