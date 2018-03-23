import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subject } from '../subject.model';

const sub = new Subject(
  null,
  'Matematicas I',
  4,
  false,
  new Date()
);

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})

export class SubjectListComponent implements OnInit, AfterViewInit {

  subjects: Subject[] = new Array(10).fill(sub);

  // Config subjects table
  subjectColumns = [
    'name',
    'credits',
    'dependency',
    'createdAt',
  ];

  dataSubjects = new MatTableDataSource();
  isLoadingStudents = true;
  currentRowSelect: any;
  currentRowSelectData: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSubjects = new MatTableDataSource(this.subjects);
    this.dataSubjects.paginator = this.paginator;
    this.dataSubjects.sort = this.sort;
    this.isLoadingStudents = false;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSubjects.filter = filterValue;
  }

  selectRow(index, data) {
    this.currentRowSelect = index;
    this.currentRowSelectData = data;
  }

}
