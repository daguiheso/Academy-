import { Injectable } from '@angular/core';
import { Subject } from '../subject.model';

@Injectable()

export class SubjectsService {

  subjects: Subject[] = [];

  constructor() {
    if (localStorage.getItem('subjects') !== 'undefined') {
      this.subjects = JSON.parse(localStorage.getItem('subjects')) || [];
    } else this.subjects = [];
  }

  getSubjects(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.subjects) resolve(this.subjects)
      else reject({ message: 'Not exist subjects' });
    })
  }

  createSubject(subject: Subject): Promise<any> {
    return new Promise((resolve, reject) => {
      this.subjects.push(subject);
      localStorage.setItem('subjects', JSON.stringify(this.subjects));
      resolve({ status: 200 });
    })
  }

}
