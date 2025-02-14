import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {
        path: 'goals',
        loadChildren: () => import('./checklist.module').then(m => m.ChecklistModule)
    },
    {path: '**', component: NotFoundComponent},

];
