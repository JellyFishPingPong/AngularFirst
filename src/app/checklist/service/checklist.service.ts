import { Injectable } from '@angular/core';
import { ListItem } from '../checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() { }

  checklist: ListItem[] = [
    { itemId: '1', itemName: 'Brush my teeth', completed: false },
    { itemId: '2', itemName: 'Buy toothpaste', completed: false },
    { itemId: '3', itemName: 'Buy toothbrush', completed: false },
    { itemId: '4', itemName: 'Wash face', completed: true }
  ];

  getListItem() { 
    return this.checklist;
  }

  // Method to add a new item with an incremented itemId and default completed as false
  addItem(item: ListItem) {
    let lastItemId = 0;

    // Ensure last item exists and get its itemId, otherwise start from 0
    if (this.checklist.length > 0) {
      const lastItem = this.checklist[this.checklist.length - 1];
      
      // Explicitly check if lastItem.itemId is not undefined
      if (lastItem.itemId) {
        lastItemId = parseInt(lastItem.itemId, 10);  // Parse itemId as an integer
      }
    }

    // Increment itemId
    const newItemId = (lastItemId + 1).toString();
    // Create the new item
    const newItem: ListItem = {
      itemId: newItemId,
      itemName: item.itemName,
      completed: false
    };

    // Add the new item to the checklist
    this.checklist = [...this.checklist, newItem];
  }
}
