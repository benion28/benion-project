import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-todos',
  templateUrl: './about-todos.component.html',
  styleUrls: ['./about-todos.component.css']
})
export class AboutTodosComponent implements OnInit {

  about = `This is one of my numerous programming crash courses which i always work on
  as it is part of my dialy job. This Todo fetches Data from JSON Placeholder and with this we will use it to implement CRUD Operations`;

  constructor() { }

  ngOnInit() {
  }

}
