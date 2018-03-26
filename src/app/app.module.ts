import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Material
import { MaterialModule } from './material.module';
import 'hammerjs';
import { NgDragDropModule } from 'ng-drag-drop';

import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentSubjectsComponent } from './student/student-subjects/student-subjects.component';
import { StudentNotesComponent } from './student/student-notes/student-notes.component';
import { StudentsService } from './student/services/students.service';

import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherSubjectsComponent } from './teacher/teacher-subjects/teacher-subjects.component';
import { TeachersService } from './teacher/services/teachers.service';

import { SubjectFormComponent } from './subject/subject-form/subject-form.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { SubjectsService } from './subject/services/subjects.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentSubjectsComponent,
    StudentNotesComponent,
    TeacherFormComponent,
    TeacherListComponent,
    TeacherSubjectsComponent,
    SubjectFormComponent,
    SubjectListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgDragDropModule.forRoot()
  ],
  providers: [StudentsService, TeachersService, SubjectsService, AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
