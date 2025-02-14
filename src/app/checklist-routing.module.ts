import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsDetailComponent } from './goals-detail/goals-detail.component';
import { ListAddComponent } from './checklist/list-add/list-add.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DailyGoalsComponent } from './daily-goals/daily-goals.component';
import { AddGoalsComponent } from './daily-goals/add-goals/add-goals.component';

const routes: Routes = [
  {path: 'longTermGoals', component: ChecklistComponent},
  {path: 'dailyGoals', component: DailyGoalsComponent},
  {path: 'daily/add', component: AddGoalsComponent},
  {path: 'add', component: ListAddComponent},
  {path: ':id', component: GoalsDetailComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }
