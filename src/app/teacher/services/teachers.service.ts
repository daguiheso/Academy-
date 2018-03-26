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

  getTeacherById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let teacher;
      this.teachers.map(el => {
        if (el._id === id) teacher = el;
      });

      if (teacher) resolve(teacher);
      else reject({ message: 'Not return id teacher' });
    })
  }

  createTeacher(teacher: Teacher): Promise<any> {
    return new Promise((resolve, reject) => {
      this.teachers.push(teacher);
      localStorage.setItem('teachers', JSON.stringify(this.teachers));
      resolve({ status: 200 });
    })
  }

  assignSubjectsToTeacher(id: string, teacher: Teacher) {
    return new Promise((resolve, reject) => {
      let indexEst = null;
      this.teachers.map((el, index) => {
        if (el._id === id) indexEst = index;
      });
      this.teachers[indexEst].subjects = teacher.subjects;

      localStorage.setItem('teachers', JSON.stringify(this.teachers));
      resolve({ status: 200 });
    })
  }

  deleteTeacher(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.teachers.map((el, indexOf) => {
        if (el._id === id) {
          this.teachers.splice(indexOf, 1);
        }
      });
      localStorage.setItem('teachers', JSON.stringify(this.teachers));
      resolve({ status: 200 });
    })
  }

}
