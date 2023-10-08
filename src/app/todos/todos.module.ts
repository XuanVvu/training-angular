import { NgModule } from '@angular/core';
import { TodosListComponent } from './todos-list/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { todosRoutes } from './todos.routing';

@NgModule({
  declarations: [TodosListComponent, TodoItemComponent, TodoDetailComponent],
  imports: [CommonModule, RouterModule.forChild(todosRoutes), SharedModule],
})
export class TodosModule {}
