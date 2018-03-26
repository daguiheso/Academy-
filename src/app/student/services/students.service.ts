import { Injectable } from '@angular/core';
import { Student } from '../student.model';

@Injectable()
export class StudentsService {

  students: Student[] = [];

  constructor() {
    if (localStorage.getItem('students') !== 'undefined') {
      this.students = JSON.parse(localStorage.getItem('students')) || [];
    } else this.students = [];
  }

  getStudents(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.students) resolve(this.students)
      else reject({ message: 'Not exist students' });
    })
  }

  getStudentById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let student;
      this.students.map(el => {
        if (el._id === id) student = el;
      });

      if (student) resolve(student);
      else reject({ message: 'Not return id student' });
    })
  }

  createStudent(student: Student): Promise<any> {
    return new Promise((resolve, reject) => {
      this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
      resolve({ status: 200 });
    })
  }

  updateStudent(id: string, student: Student): Promise<any> {
    return new Promise((resolve, reject) => {
      let indexEst = null;
      this.students.map((el, index) => {
        if (el._id === id) indexEst = index;
      });
      this.students[indexEst].firstName = student.firstName;
      this.students[indexEst].lastName = student.lastName;
      this.students[indexEst].documentNumber = student.documentNumber;
      this.students[indexEst].email = student.email;
      this.students[indexEst].age = student.age;
      this.students[indexEst].cell = student.cell;

      localStorage.setItem('students', JSON.stringify(this.students));
      resolve({ status: 200 });
    })
  }

  assignSubjectsToStudent(id: string, student: Student) {
    return new Promise((resolve, reject) => {
      let indexEst = null;
      this.students.map((el, index) => {
        if (el._id === id) indexEst = index;
      });
      this.students[indexEst].subjects = student.subjects;

      localStorage.setItem('students', JSON.stringify(this.students));
      resolve({ status: 200 });
    })
  }

}
