import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Teacher } from '../teacher.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})

export class TeacherListComponent implements OnInit {

  teachers: Teacher[] = [];

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

  constructor() {
    this.teachers = JSON.parse(localStorage.getItem('teachers')) || [];
  }

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
