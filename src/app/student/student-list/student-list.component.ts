import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
// import { DatePipe } from '@angular/common';

import { Student } from '../student.model';

const stud = new Student(
  'Daniel',
  'Hernández',
  1024544253,
  'daguiheso@test.com',
  22,
  new Date()
);

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit, AfterViewInit {

  students: Student[] = new Array(10).fill(stud);

  // Config students table
  studentColumns = [
    'firstName',
    'lastName',
    'documentNumber',
    'email',
    'age',
    'createdAt'
  ];

  dataStudents = new MatTableDataSource();
  isLoadingStudents = true;
  currentRowSelect: any;
  currentRowSelectData: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

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

}
