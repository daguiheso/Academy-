import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';

export const SUBJECT_ROUTES: Routes = [
	{ path: '', component: SubjectListComponent },
	{ path: 'new', component: SubjectFormComponent },
]