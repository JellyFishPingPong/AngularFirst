import { Component } from '@angular/core';
import { ChecklistListComponent } from '../checklist/checklist-list/checklist-list.component';
import { ListItem, ListType } from '../checklist/checklist';
import { ChecklistService } from '../checklist/service/checklist.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-daily-goals',
  imports: [ChecklistListComponent, CommonModule, RouterModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './daily-goals.component.html',
  styleUrl: './daily-goals.component.scss'
})
export class DailyGoalsComponent {
  name = 'checklist';

  ListState = ListType;
  checklist: ListItem[] = [];

  listType = 0;
  listTypeName = "";
  filteredList: ListItem[] = [];

  searchBar = new FormControl('');

  constructor(private checklistService: ChecklistService) {
  }

  ngOnInit() {
    this.searchBar.valueChanges.pipe(map((searchText) => this.checklistService.filterGoals(searchText))).subscribe((filtered) => {
      this.filteredList = filtered;
    })

    this.checklist = this.checklistService.getDailyGoals();
    this.refreshList();
  }

  refreshList() {
    this.filteredList = [...this.checklist];
  }

  toggle() {
    this.listType = (this.listType + 1) % 3;
  }

  // This method handles the event emitted from the child
  checkBoxChanged(item: ListItem) {
    console.log('Event received in parent: ', item);
    item.completed = !item.completed;
    this.refreshList();
  }

  Delete(itemId: string) {
    this.checklist = this.checklistService.deleteItem(itemId, 1);
    console.log(this.checklist);
    this.refreshList();
  }
}
