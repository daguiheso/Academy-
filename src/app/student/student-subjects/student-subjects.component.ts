import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from '../../subject/subject.model';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.scss']
})

export class StudentSubjectsComponent implements OnInit {

  subjects: Subject[] = [];
  selectSubjects: Subject[] = [];

  onItemDrop(e: any) {
    // Get the dropped data here
    this.selectSubjects.push(e.dragData);

    let filterById = this.subjects.map((el, indexOf) => {
      if (el._id === e.dragData._id) {
        this.subjects.splice(indexOf, 1);
      }
    })

  }

  constructor() {
    this.subjects = JSON.parse(localStorage.getItem('subjects')) || [];
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  }

}
