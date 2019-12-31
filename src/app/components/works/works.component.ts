import { WorksService } from './../../services/works.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';
import { fadeAnimation } from 'src/app/fade-animations';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class WorksComponent implements OnInit {

// Courses
  courseTitle = 'Benion Maths, Computer & Statistics Courses';
  label;
  fppCourses;

  mscCourses = [
    'CMP 111',
    'MTH 111',
    'STA 111',
    'MTH 122',
    'MTH 132',
    'CMP 211'
  ];

// Directives
  courses = [
    { id: 1, name: 'CMP 111'},
    { id: 2, name: 'MTH 111'},
    { id: 3, name: 'STA 111'},
    { id: 4, name: 'MTH 122'},
    { id: 5, name: 'MTH 132'}
  ];

  viewMode = 'SomethingElse';


// Forms
  title = 'Benion-Web';
  isChecked = false;
  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];

// Animations
  todoLists: any = [
    'Check Facebook Notifications',
    'Read News Online',
    'Play Games',
    'Do My Programmings',
    'Chat Online',
    'Midnight Browsing'
  ];

  addItems = (input: HTMLInputElement) => {
    this.todoLists.splice(0, 0, input.value);
    console.log('Item Added');
  }

  removeItems = ( item ) => {
    const index = this.todoLists.indexOf(item);
    this.todoLists.splice(index, 1);
    console.log('Item Removed');
  }


  onChange($event) {
    console.log($event);
  }

  // Directives
  onAdd = () => {
    this.courses.push({ id: 6, name: 'CMP 211' });
  }

  onRemove = (course) => {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChanges = (course) => {
    course.name = 'UPDATED';
  }

// Form
  getName(x) {
    console.log(x);
  }

  getComment(x) {
    console.log(x);
  }

  constructor(courseService: WorksService) {
    this.label = courseService.getTitle();
    this.fppCourses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
