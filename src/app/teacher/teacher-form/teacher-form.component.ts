import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Teacher } from '../teacher.model';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})

export class TeacherFormComponent implements OnInit {

  teacherForm: FormGroup;
  teachers: Teacher[] = [];

  constructor(
    private router: Router,
    private teachersService: TeachersService
  ) { }

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
      const teacher = new Teacher(
        firstName,
        lastName,
        documentNumber,
        email,
        age,
        specialty,
        new Date(),
        new Date().getTime().toString()
      );

      this.teachersService.createTeacher(teacher)
        .then(res => {
          this.router.navigate(['/teachers']);
        }, error => {
          debugger
        })
    }
  }

}
