import { Injectable } from '@angular/core';
import { DailyGoal, ListItem, LongTermGoal } from '../checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() { }

  checklist: LongTermGoal[] = [
    { itemId: '1', itemName: 'Finish the video', completed: false },
    { itemId: '2', itemName: 'Buy toothpaste', completed: false },
    { itemId: '3', itemName: 'Buy toothbrush', completed: false },
  ];


  dailyGoals: DailyGoal[] = [
    { itemId: '1', itemName: 'Brush my teeth', completed: false },
    { itemId: '2', itemName: 'Flush the toilet', completed: false },
    { itemId: '3', itemName: 'Workout', completed: false },
    { itemId: '4', itemName: 'Wash face', completed: true }
  ];

  getListItem() {
    return this.checklist;
  }

  getDailyGoals() {
    return this.dailyGoals;
  }

  addDailyGoals(item: DailyGoal) {
    this.addItem(item, 1);
  }

  // Method to add a new item with an incremented itemId and default completed as false
  addItem(item: ListItem, type: number) {
    let lastItemId = 0;

    if (type == 0) {
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
    } else {
      // Ensure last item exists and get its itemId, otherwise start from 0
      if (this.dailyGoals.length > 0) {
        const lastItem = this.dailyGoals[this.dailyGoals.length - 1];

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
      this.dailyGoals = [...this.dailyGoals, newItem];
    }

  }

  // Method to delete an item by its itemId
  deleteItem(itemId: string, type: number) {
    if (type === 0) {
      // Delete item from checklist
      this.checklist = this.checklist.filter(item => item.itemId !== itemId);
      return this.checklist;
    } else {
      // Delete item from dailyGoals
      this.dailyGoals = this.dailyGoals.filter(item => item.itemId !== itemId);
      return this.dailyGoals;
    }

  }

}
