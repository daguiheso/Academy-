import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Teacher } from '../teacher.model';

const teach = new Teacher(
  'Claudia',
  'Soler',
  10256874,
  'claudia@gmail.com',
  35,
  'Matematicas',
  new Date()
);

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})

export class TeacherListComponent implements OnInit {

  teachers: Teacher[] = new Array(10).fill(teach);

  // Config teachers table
  teacherColumns = [
    'firstName',
    'lastName',
    'documentNumber',
    'email',
    'age',
    'specialty',
    'createdAt'
  ];

  dataTeachers = new MatTableDataSource();
  isLoadingStudents = true;
  currentRowSelect: any;
  currentRowSelectData: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataTeachers = new MatTableDataSource(this.teachers);
    this.dataTeachers.paginator = this.paginator;
    this.dataTeachers.sort = this.sort;
    this.isLoadingStudents = false;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataTeachers.filter = filterValue;
  }

  selectRow(index, data) {
    this.currentRowSelect = index;
    this.currentRowSelectData = data;
  }

}
