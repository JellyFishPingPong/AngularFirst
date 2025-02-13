import { Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { DailyGoalsComponent } from './daily-goals/daily-goals.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalsDetailComponent } from './goals-detail/goals-detail.component';

export const routes: Routes = [
    {path: '', component: ChecklistComponent},
    {path: 'dailyGoals', component: DailyGoalsComponent},
    {path: 'goals/:id', component: GoalsDetailComponent},
    {path: '**', component: NotFoundComponent},

];
