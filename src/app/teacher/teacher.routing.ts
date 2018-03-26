import { Routes, RouterModule } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherSubjectsComponent } from './teacher-subjects/teacher-subjects.component';

export const TEACHER_ROUTES: Routes = [
	{ path: '', component: TeacherListComponent },
	{ path: 'new', component: TeacherFormComponent },
	{ path: ':id/subjects', component: TeacherSubjectsComponent },
]