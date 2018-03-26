import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { StudentNotesComponent } from './student-notes/student-notes.component';

export const STUDENT_ROUTES: Routes = [
	{ path: '', component: StudentListComponent},
	{ path: 'new', component: StudentFormComponent},
	{ path: ':id/update', component: StudentFormComponent},
	{ path: ':id/subjects', component: StudentSubjectsComponent},
	{ path: ':id/notes', component: StudentNotesComponent}
]