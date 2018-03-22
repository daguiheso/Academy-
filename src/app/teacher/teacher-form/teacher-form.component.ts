import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Teacher } from '../teacher.model';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})

export class TeacherFormComponent implements OnInit {

  teacherForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.teacherForm = new FormGroup({
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
      specialty: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      const { firstName, lastName, documentNumber, email, age, specialty } = this.teacherForm.value;
      const teacher = new Teacher(firstName, lastName, documentNumber, email, age, specialty, new Date());
      console.log(teacher);
    }
  }

}
