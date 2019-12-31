import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTodosComponent } from './about-todos.component';

describe('AboutTodosComponent', () => {
  let component: AboutTodosComponent;
  let fixture: ComponentFixture<AboutTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
