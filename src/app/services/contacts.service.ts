import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = [
    {
      id: 1,
      firstName: 'Bernard',
      lastName: 'Iorver',
      city: 'Television',
      isChecked: false
    },
    {
      id: 5,
      firstName: 'Florence',
      lastName: 'Ogwuche',
      city: 'Television',
      isChecked: false
    },
    {
      id: 16,
      firstName: 'Blessing',
      lastName: 'Okawu',
      city: 'Otukpo',
      isChecked: false
    },
    {
      id: 11,
      firstName: 'Aloysius',
      lastName: 'Idoko',
      city: 'Boro',
      isChecked: false
    },
    {
      id: 8,
      firstName: 'Kingsley',
      lastName: 'Egbuta',
      city: 'Aba',
      isChecked: false
    },
    {
      id: 15,
      firstName: 'Joseph',
      lastName: 'Azubuike',
      city: 'Abidjan',
      isChecked: false
    },
    {
      id: 3,
      firstName: 'Dorcas',
      lastName: 'Agaku',
      city: 'Genabe',
      isChecked: false
    },
    {
      id: 12,
      firstName: 'Ferdinard',
      lastName: 'Nwafor',
      city: 'Gimbia',
      isChecked: false
    },
    {
      id: 10,
      firstName: 'Ibrahim',
      lastName: 'Yahaya',
      city: 'Kakuri',
      isChecked: false
    },
    {
      id: 14,
      firstName: 'Isaac',
      lastName: 'Onismus',
      city: 'Television',
      isChecked: false
    },
    {
      id: 7,
      firstName: 'Blessing',
      lastName: 'Linus',
      city: 'Kamazoa',
      isChecked: false
    },
    {
      id: 13,
      firstName: 'Isreal',
      lastName: 'Emmanuel',
      city: 'Barde',
      isChecked: false
    },
    {
      id: 4,
      firstName: 'Susan',
      lastName: 'Agaku',
      city: 'Ijebu',
      isChecked: false
    },
    {
      id: 9,
      firstName: 'Joshua',
      lastName: 'Ayobami',
      city: 'Television',
      isChecked: false
    },
    {
      id: 6,
      firstName: 'Victor',
      lastName: 'Nwabudike',
      city: 'Television',
      isChecked: false
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'Agbaji',
      city: 'Romi',
      isChecked: false
    }
  ];

  contactSize = this.contacts.length;
  todoList: AngularFireList<any>;
  todos = [];
  todo = [
    {
      $key: 't1',
      addTodo: 'Dancing',
      isCompleted: true
    },
    {
      $key: 't2',
      addTodo: 'Singing',
      isCompleted: false
    }
  ];
  value = this.todos.lastIndexOf;

  constructor(private firebase: AngularFireDatabase) {
    this.todoList = this.firebase.list('todos');
    this.todoList.snapshotChanges().subscribe(
      list => {
        this.todos = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }


  todoForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    addTodo: new FormControl('', Validators.required),
    isCompleted: new FormControl(false)
  });

  initializeFormGroup() {
    this.todoForm.setValue({
      $key: null,
      addTodo: '',
      isCompleted: false
    });
  }

  getTodos() {
    return this.todoList.snapshotChanges();
  }

  insertTodo(todo) {
    this.todoList.push({
      addTodo: todo.addTodo,
      isCompleted: todo.isCompleted
    });
  }

  updateTodo(todo) {
    this.todoList.update(todo.$key,
      {
        addTodo: todo.addTodo,
        isCompleted: todo.isCompleted
      });
  }

  deleteTodo($key: string) {
    this.todoList.remove($key);
    console.log(this.value);
  }

  populateForm(todo) {
    this.todoForm.setValue(todo);
  }

}
