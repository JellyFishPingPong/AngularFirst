import { Component, Input, input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ListItem } from '../checklist';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-checklist-list',
  imports: [CommonModule, MatCheckboxModule, RouterModule, MatButtonModule],
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistListComponent {
  @Input() list: ListItem[] = [];
  @Input() route: string = '';

  @Output() checkBoxTicked = new EventEmitter<ListItem>();
  @Output() delete = new EventEmitter<string>();
  
  checkBoxChanged(item: ListItem) {
    this.checkBoxTicked.emit(item)
    console.log('Event emitted from child: ', item);

  }

  Delete(itemId ?: string) {
    
    this.delete.emit(itemId)
    console.log('Event emitted from child: ', itemId);

  }
}
