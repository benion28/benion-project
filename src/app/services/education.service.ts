import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educationList: AngularFireList<any>;
  education = [];

  constructor(private firebase: AngularFireDatabase) {
    this.educationList = this.firebase.list('educationNews');
    this.educationList.snapshotChanges().subscribe(
      list => {
        this.education = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

  educationForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl(''),
    details: new FormControl('', Validators.required),
    isView: new FormControl(false)
  });

  initializeFormGroupEducation() {
    this.educationForm.setValue({
      $key: null,
      title: '',
      details: '',
      isView: false
    });
  }

  getEducation() {
    return this.educationList.snapshotChanges();
  }

  insertEducation(news) {
    this.educationList.push({
      title: news.title,
      details: news.details,
      isView: false
    });
  }

  updateEducation(news) {
    this.educationList.update(news.$key,
      {
        title: news.title,
        details: news.details
      });
  }

  deleteEducation($key: string) {
    this.educationList.remove($key);
  }

  populateEducationForm(news) {
    this.educationForm.setValue(news);
  }

  updateEducationView(news) {
    this.educationList.update(news.$key,
      {
        isView: true
      });
  }

  updateEducationClose(news) {
    this.educationList.update(news.$key,
      {
        isView: false
      });
  }
}
