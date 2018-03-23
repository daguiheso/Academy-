import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})

export class SubjectFormComponent implements OnInit {

  subjectForm: FormGroup;
  subjects: Subject[];

  constructor() {
    this.subjects = JSON.parse(localStorage.getItem('subjects')) || [];
  }

  ngOnInit() {
    this.subjectForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      credits: new FormControl(null, [
        Validators.required
      ]),
      dependency: new FormControl(null, [
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
      this.subjects.push(subject);
      localStorage.setItem('subjects', JSON.stringify(this.subjects));
    }
  }

}
