import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todos$.subscribe(todos => (this.todos = todos));
  }

  toggleTodoCompletion(id: number): void {
    this.todoService.toggleTodoCompletion(id);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
}
