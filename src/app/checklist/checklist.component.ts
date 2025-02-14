import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListItem, ListType } from './checklist';
import { CommonModule } from '@angular/common';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';
import { ChecklistService } from './service/checklist.service';
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
  standalone: true,
  imports: [CommonModule, ChecklistListComponent, MatButtonModule, RouterModule]
})
export class ChecklistComponent implements OnInit {
  name = 'checklist';

  ListState = ListType;
  checklist: ListItem[] = [];

  buttonText = "Show Incomplete";
  showAll = true;
  listTypeName = "";
  filteredList: ListItem[] = [];

  constructor(private checklistService: ChecklistService) {
  }

  ngOnInit() {
    this.checklist = this.checklistService.getListItem();
    this.refreshList();  // Initialize filteredList with default state
  }

  toggle() {
    this.showAll = !this.showAll;
    this.refreshList();
  }

  refreshList() {
    if (this.showAll) {
      this.listTypeName = "All Goals";
      this.buttonText = "Show incomplete"
      this.filteredList = [...this.checklist]; // Full list
    } else {
      this.listTypeName = "To-Do-List"
      this.buttonText = "Show All"
      this.filteredList = this.checklist.filter(item => !item.completed);
    }

  }

  // This method handles the event emitted from the child
  checkBoxChanged(item: ListItem) {
    console.log('Event received in parent: ', item);
    item.completed = !item.completed;
    this.refreshList();
  }

  Delete(itemId: string) {
    this.checklist = this.checklistService.deleteItem(itemId, 0)
    console.log(this.checklist);
    this.refreshList();
  }
}
