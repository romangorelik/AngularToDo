import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo';
  todos: any[] = [{task: 'task1', complete: false, update: ''}]
  todo: string;
  backColor: string;

  addTodo(): void {
    this.todos.push({task: this.todo, complete: false, update: ''})
    this.todo = ''
  }

  deleteTodo(ind: number): void {
    this.todos.splice(ind, 1)
  } 

  completeTodo(ind: number): void {
    this.todos[ind].complete = !this.todos[ind].complete
    setTimeout(() => {
      this.deleteTodo(ind)
    }, 4000)
  }

  update(ind: number, str: string): void {
    this.todos[ind].update = str
    this.todos[ind].task = this.todos[ind].update
    this.todos[ind].update = ''
  }
}
