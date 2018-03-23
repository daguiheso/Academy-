import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})

export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  student: Student;
  students: Student[] = [];
  new: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.students = JSON.parse(localStorage.getItem('students')) || [];
    this.student = {
      firstName: '',
      lastName: '',
      documentNumber: null,
      email: '',
      age: null,
      cell: null,
      subjects: []
    }

    // Validation if update
    if (this.route.snapshot.url[1]) {
      if (this.route.snapshot.url[1].path === 'update') {
        this.new = false;
      }
    }

    let filterById = this.students.map(el => {
      if (el._id === this.route.snapshot.params.id) this.student = el
    });

  }

  ngOnInit() {
    this.studentForm = new FormGroup({
      firstName: new FormControl(this.student.firstName, [
        Validators.required
      ]),
      lastName: new FormControl(this.student.lastName, [
        Validators.required
      ]),
      documentNumber: new FormControl(this.student.documentNumber, [
        Validators.required
      ]),
      email: new FormControl(this.student.email, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      age: new FormControl(this.student.age, [
        Validators.required
      ]),
      cell: new FormControl(this.student.cell, [
        Validators.required
      ]),
    })
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const { firstName, lastName, documentNumber, email, age, cell } = this.studentForm.value;
      const student = new Student(
        firstName,
        lastName,
        documentNumber,
        email,
        age,
        cell,
        new Date(),
        new Date().getTime().toString()
      );

      // Validate if is new or update
      if (this.new) {
        this.students.push(student);
      } else {
        var index = null;
        let filterById = this.students.map((el,indexOf) => {
          if (el._id === this.route.snapshot.params.id) index = indexOf;
        })
        this.students[index].firstName = firstName;
        this.students[index].lastName = lastName;
        this.students[index].documentNumber = documentNumber;
        this.students[index].email = email;
        this.students[index].age = age;
        this.students[index].cell = cell;
      }
      localStorage.setItem('students', JSON.stringify(this.students));
    }
  }

}
