import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Subject } from '../subject.model';
import { SubjectsService } from '../services/subjects.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})

export class SubjectFormComponent implements OnInit {

  subjectForm: FormGroup;
  subjects: Subject[];

  constructor(
    private router: Router,
    private subjectsService: SubjectsService
  ) { }

  ngOnInit() {
    this.subjectForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      credits: new FormControl(null, [
        Validators.required
      ]),
      dependency: new FormControl(false, [
        Validators.required
      ])
    })
  }

  onSubmit() {
    if (this.subjectForm.valid) {
      const { name, credits, dependency } = this.subjectForm.value;
      const subject = new Subject(
        name,
        credits,
        dependency,
        new Date(),
        new Date().getTime().toString()
      );

      this.subjectsService.createSubject(subject)
        .then(res => {
          this.router.navigate(['/subjects']);
        }, error => {
          debugger
        })
    }
  }

}
