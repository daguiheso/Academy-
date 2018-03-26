import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Teacher } from '../teacher.model';
import { Subject } from '../../subject/subject.model';
import { SubjectsService } from '../../subject/services/subjects.service';
import { TeachersService } from '../services/teachers.service';


@Component({
  selector: 'app-teacher-subjects',
  templateUrl: './teacher-subjects.component.html',
  styleUrls: ['./teacher-subjects.component.scss']
})

export class TeacherSubjectsComponent implements OnInit {

  teacher: Teacher;
  subjects: Subject[] = [];
  selectSubjects: Subject[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subjectsService: SubjectsService,
    private teacherService: TeachersService
  ) {
    this.subjectsService.getSubjects()
      .then(res => {
        this.subjects = res;

        this.teacherService.getTeacherById(this.route.snapshot.params.id)
          .then(res => {
            this.teacher = res;
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
    const teacher = new Teacher(
      this.teacher.firstName,
      this.teacher.lastName,
      this.teacher.documentNumber,
      this.teacher.email,
      this.teacher.age,
      this.teacher.specialty,
      new Date(),
      new Date().getTime().toString(),
      this.selectSubjects
    );

    this.teacherService.assignSubjectsToTeacher(this.route.snapshot.params.id, teacher)
      .then(res => {
        this.router.navigate(['/teachers']);
      }, error => {
        debugger
      })
  }

}
