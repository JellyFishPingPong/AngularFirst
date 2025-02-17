import { Injectable } from '@angular/core';
import { DailyGoal, ListItem, LongTermGoal } from '../checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() { }

  checklist: LongTermGoal[] = [
    { itemId: '1', itemName: 'Finish the video', completed: false },
    { itemId: '2', itemName: 'Flush the toilet', completed: false },
    { itemId: '3', itemName: 'Buy toothbrush', completed: false },
  ];


  dailyGoals: DailyGoal[] = [
    { itemId: '1', itemName: 'Wake Up', completed: true },
    { itemId: '2', itemName: 'Go to work', completed: true },
    { itemId: '3', itemName: 'Workout', completed: false },
  ];

  getListItem() {
    return this.checklist;
  }

  
  getItemById(itemId: string, type: number) {
    if(type === 0) {
      const index = this.checklist.findIndex(item => item.itemId === itemId);

      if (index !== -1) {
        // If item is found, update the item
        return this.checklist[index] 
      }
    } else {
      const index = this.dailyGoals.findIndex(item => item.itemId === itemId);

      if (index !== -1) {
        // If item is found, update the item
        return this.dailyGoals[index] 
      }
    }

    return undefined;
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

  // Method to edit an existing item
  editItem(itemId: string, updatedItem: ListItem, type: number) {
    if (type === 0) {
      // Find the index of the item to be edited in the checklist
      const index = this.checklist.findIndex(item => item.itemId === itemId);

      if (index !== -1) {
        // If item is found, update the item
        this.checklist[index] = {
          ...this.checklist[index],
          ...updatedItem // Merge the updated properties
        };
      }
    } else {
      // Find the index of the item to be edited in the dailyGoals
      const index = this.dailyGoals.findIndex(item => item.itemId === itemId);

      if (index !== -1) {
        // If item is found, update the item
        this.dailyGoals[index] = {
          ...this.dailyGoals[index],
          ...updatedItem // Merge the updated properties
        };
      }
    }
  }

  
  // Method to filter goals based on search text
  filterGoals(searchText: string | null) {
    if (!searchText) {
      return this.checklist; // If no search text, show all goals
    }
    return this.checklist.filter((goal) =>
      goal.itemName.toLowerCase().includes(searchText.toLowerCase())
    );
  }

}
