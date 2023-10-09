import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, of, pluck, switchMap } from 'rxjs';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private readonly todosService: TodosService
  ) {}
  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: number) => this.todosService.getTodoById(Number(id))),
        filter(todo => !!todo)

      )
      .subscribe(console.log);

  }
}
