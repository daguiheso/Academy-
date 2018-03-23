import { Routes, RouterModule } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';

export const TEACHER_ROUTES: Routes = [
	{ path: '', component: TeacherListComponent },
	{ path: 'new', component: TeacherFormComponent },
]