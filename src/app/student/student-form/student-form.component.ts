import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../student.model';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})

export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  student: Student;
  new: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) {
    // Update student
    if (this.route.snapshot.routeConfig.path === ':id/update') {
      this.new = false;

      this.studentsService.getStudentById(this.route.snapshot.params.id)
      .then(res => {
        this.student = res;
      }, error => {
        debugger
      })
    }
    // Create User
    else if (this.route.snapshot.routeConfig.path === 'new') {
      this.new = true;
      this.student = {
        firstName: '',
        lastName: '',
        documentNumber: null,
        email: '',
        age: null,
        cell: null,
        subjects: []
      };
    }
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
        this.studentsService.createStudent(student)
          .then(res => {
            this.router.navigate(['/students']);
          }, error => {
            debugger
          })
      } else {
        this.studentsService.updateStudent(this.route.snapshot.params.id, student)
          .then(res => {
            this.router.navigate(['/students']);
          }, error => {
            debugger
          })
      }
    }
  }

}
