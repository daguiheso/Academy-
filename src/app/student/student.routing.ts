import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';

export const STUDENT_ROUTES: Routes = [
	{ path: '', component: StudentListComponent},
	{ path: 'new', component: StudentFormComponent},
	{ path: ':id/update', component: StudentFormComponent}
]