import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosListComponent implements OnInit, OnDestroy {
  inputTodo: string | undefined;
  todos: any[] | undefined;
  todoForm: FormGroup | any;
  sup= new Subscription()

  obsData: Observable<any> | any;

  constructor(private todosService: TodosService, private fb: FormBuilder) {}
  ngOnDestroy(): void {
    this.obsData.unsubscribe();
  }
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      todoInput: ['', Validators.compose([Validators.required])],
    });

    this.obsData = this.todosService.todos$.subscribe((data)=>{
      console.log(data);
      
      this.todos=data
    })

    console.log('-----');
    
    
    this.todosService.todos$.next(this.todosService.getData)
    
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
