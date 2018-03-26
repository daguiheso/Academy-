import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Student } from '../student.model';
import { Subject } from '../../subject/subject.model';
import { SubjectsService } from '../../subject/services/subjects.service';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.scss']
})

export class StudentSubjectsComponent implements OnInit {


  student: Student;
  subjects: Subject[] = [];
  selectSubjects: Subject[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subjectsService: SubjectsService,
    private studentsService: StudentsService
  ) {
    this.subjectsService.getSubjects()
      .then(res => {
        this.subjects = res;

        this.studentsService.getStudentById(this.route.snapshot.params.id)
          .then(res => {
            this.student = res;
            res.subjects.map(item => {
              this.selectSubjects.push(item);
              this.deleteSubject(item);
            })
          }, error => {
            debugger
          })
      }, error => {
        debugger
      })

  }

  ngOnInit() {
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    this.selectSubjects.push(e.dragData);
    this.deleteSubject(e.dragData);
  }

  deleteSubject(data) {
    this.subjects.map((el, indexOf) => {
      if (el._id === data._id) {
        this.subjects.splice(indexOf, 1);
      }
    })
  }

  onSubmit(form: NgForm) {
    const student = new Student(
      this.student.firstName,
      this.student.lastName,
      this.student.documentNumber,
      this.student.email,
      this.student.age,
      this.student.cell,
      new Date(),
      new Date().getTime().toString(),
      this.selectSubjects
    );
    this.studentsService.assignSubjectsToStudent(this.route.snapshot.params.id, student)
      .then(res => {
        this.router.navigate(['/students']);
      }, error => {

      })
  }

}
