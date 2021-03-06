import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { Student } from '../student.model';
import { StudentsService } from '../services/students.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit, AfterViewInit {

  students: Student[] = [];

  // Config students table
  studentColumns = [
    'firstName',
    'lastName',
    'documentNumber',
    'email',
    'age',
    'cell',
    'createdAt'
  ];

  dataStudents = new MatTableDataSource();
  isLoadingStudents = true;
  currentRowSelect: any;
  currentRowSelectData: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private studentsService: StudentsService,
    private appService: AppService
  ) {
    this.studentsService.getStudents()
      .then(res => {
        this.students = res;
      }, error => {
        debugger
      })
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataStudents = new MatTableDataSource(this.students);
    this.dataStudents.paginator = this.paginator;
    this.dataStudents.sort = this.sort;
    this.isLoadingStudents = false;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataStudents.filter = filterValue;
  }

  selectRow(index, data) {
    this.currentRowSelect = index;
    this.currentRowSelectData = data;
  }

  goToEdit() {
    this.router.navigate([`students/${this.currentRowSelectData._id}/update`]);
  }

  assignSubjects() {
    this.router.navigate([`students/${this.currentRowSelectData._id}/subjects`]);
  }

  assignNotes() {
    this.router.navigate([`students/${this.currentRowSelectData._id}/notes`]);
  }

  generateReport() {
    this.appService.exportAsExcelFile(this.students, 'reporte');
  }

}
