import { Injectable } from '@angular/core';
import { Teacher } from '../teacher.model';

@Injectable()

export class TeachersService {

  teachers: Teacher[] = [];

  constructor() {
    if (localStorage.getItem('teachers') !== 'undefined') {
      this.teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    } else this.teachers = [];
  }

  getTeachers(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.teachers) resolve(this.teachers)
      else reject({ message: 'Not exist teachers' });
    })
  }

  createTeacher(teacher: Teacher): Promise<any> {
    return new Promise((resolve, reject) => {
      this.teachers.push(teacher);
      localStorage.setItem('teachers', JSON.stringify(this.teachers));
      resolve({ status: 200 });
    })
  }

}
