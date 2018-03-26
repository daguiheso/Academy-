import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../student.model';
import { Subject } from '../../subject/subject.model';
import { SubjectsService } from '../../subject/services/subjects.service';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.scss']
})
export class StudentNotesComponent implements OnInit, AfterViewInit {

  student: Student;
  subjects: Subject[] = [];

  // Config subjects table
  subjectColumns = [
    'name',
    'firstNote',
    'secondNote'
  ];

  dataSubjects = new MatTableDataSource();
  isLoadingStudents = true;
  currentRowSelect: any;
  currentRowSelectData: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subjectsService: SubjectsService,
    private studentsService: StudentsService
  ) {

    this.studentsService.getStudentById(this.route.snapshot.params.id)
      .then(res => {
        this.student = res;
      }, error => {

      })
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSubjects = new MatTableDataSource(this.student.subjects);
    this.dataSubjects.paginator = this.paginator;
    this.dataSubjects.sort = this.sort;
    this.isLoadingStudents = false;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSubjects.filter = filterValue;
  }

  onSubmit() {
    const student = new Student(
      this.student.firstName,
      this.student.lastName,
      this.student.documentNumber,
      this.student.email,
      this.student.age,
      this.student.cell,
      new Date(),
      new Date().getTime().toString(),
      this.student.subjects
    );

    this.studentsService.assignSubjectsToStudent(this.route.snapshot.params.id, student)
      .then(res => {
        this.router.navigate(['/students']);
      }, error => {
        debugger
      })
  }

}
