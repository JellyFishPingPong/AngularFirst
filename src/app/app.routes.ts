import { Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { DailyGoalsComponent } from './daily-goals/daily-goals.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalsDetailComponent } from './goals-detail/goals-detail.component';
import { ListAddComponent } from './checklist/list-add/list-add.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'longTermGoals', component: ChecklistComponent},
    {path: 'dailyGoals', component: DailyGoalsComponent},
    {path: 'goals/add', component: ListAddComponent},
    {path: 'goals/:id', component: GoalsDetailComponent},
    {path: '**', component: NotFoundComponent},

];
