import { Injectable } from '@angular/core';
import { Todo } from '../components/todos/todos.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applicaion/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos = [
      {
        id: 1,
        title: 'Surfing The Internet',
        completed: false
      },
      {
        id: 2,
        title: 'Some Programming Tasks',
        completed: true
      },
      {
        id: 3,
        title: 'Studying Mathematics',
        completed: false
      },
      {
        id: 4,
        title: 'Reading Some Books',
        completed: true
      },
      {
        id: 5,
        title: 'Doing Some Assignments',
        completed: false
      },
      {
        id: 6,
        title: 'Practicing Golf',
        completed: true
      },
      {
        id: 7,
        title: 'Football Training',
        completed: true
      }
  ];

  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=20';

  constructor(
    private http: HttpClient
    ) { }

// Get Todos From Server
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${ this.todosUrl }${ this.todosLimit}`);
  }

// Toggle On Server
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${ this.todosUrl }/${ todo.id }`;
    return this.http.put(url, todo, httpOptions);
  }

// Delete On Server
  deleteTodo(todo: Todo): Observable<any> {
    const url = `${ this.todosUrl }/${ todo.id }`;
    return this.http.delete<Todo>(url, httpOptions);
  }


// Add Todo Item
    addTodo(todo: Todo): Observable<Todo>  {
      return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
    }


}

