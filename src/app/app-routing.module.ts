import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { STUDENT_ROUTES } from './student/student.routing';
import { SUBJECT_ROUTES } from './subject/subject.routing';
import { TEACHER_ROUTES } from './teacher/teacher.routing';

const routes: Routes = [
  { path: 'students', children: STUDENT_ROUTES},
  { path: 'subjects', children: SUBJECT_ROUTES},
  { path: 'teachers', children: TEACHER_ROUTES},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
