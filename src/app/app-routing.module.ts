import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './todos/todos-list/todos.component';
import { TodosModule } from './todos/todos.module';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path:'foods',
    loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule)
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
    // component: TodosListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
