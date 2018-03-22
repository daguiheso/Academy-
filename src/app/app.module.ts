import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Material
import { MaterialModule } from './material.module';
import 'hammerjs';

import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { SubjectFormComponent } from './subject/subject-form/subject-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentListComponent,
    TeacherFormComponent,
    TeacherListComponent,
    SubjectFormComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
