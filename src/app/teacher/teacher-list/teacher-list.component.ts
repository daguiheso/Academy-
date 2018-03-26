import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { Teacher } from '../teacher.model';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})

export class TeacherListComponent implements OnInit, AfterViewInit {

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

  constructor(
    private router: Router,
    private teachersService: TeachersService
  ) {
    this.teachersService.getTeachers()
      .then(res => {
        this.teachers = res;
      }, error => {
        debugger
      })
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

  assignSubjects() {
    this.router.navigate([`teachers/${this.currentRowSelectData._id}/subjects`]);
  }

}
