import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListItem, ListType } from './checklist';
import { CommonModule } from '@angular/common';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';
import { ChecklistService } from './service/checklist.service';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
  standalone: true,
  imports: [CommonModule, ChecklistListComponent, MatButtonModule]
})
export class ChecklistComponent implements OnInit {
  name = 'checklist';

  ListState = ListType;
  checklist : ListItem[] = [];

  listType = 0;
  listTypeName = "";
  filteredList: ListItem[] = [];

  constructor(private checklistService : ChecklistService) { 
  }

  ngOnInit() {
    this.checklist = this.checklistService.getListItem();
    this.refreshList();  // Initialize filteredList with default state
  }

  toggle() {
    this.listType = (this.listType + 1) % 3;
    this.refreshList();
  }

  refreshList() {
    switch (this.listType) {
      case ListType.Incomplete:
        this.listTypeName = "Goals"
        this.filteredList = this.checklist.filter(item => !item.completed);
        break;
      case ListType.Completed:
        this.listTypeName = "Completed Goals"
        this.filteredList = this.checklist.filter(item => item.completed);
        break;
      case ListType.All:
        this.listTypeName = "All Goals"
        this.filteredList = [...this.checklist]; // Full list
        break;
    }
  }

  // This method handles the event emitted from the child
  checkBoxChanged(item: ListItem) {
    console.log('Event received in parent: ', item);
    item.completed = !item.completed;
    this.refreshList();
  }
}
