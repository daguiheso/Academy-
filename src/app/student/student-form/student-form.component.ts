import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})

export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.required
      ]),
      documentNumber: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      age: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const { firstName, lastName, documentNumber, email, age } = this.studentForm.value;
      const student = new Student(firstName, lastName, documentNumber, email, age, new Date());
      console.log(student);
    }
  }

}
