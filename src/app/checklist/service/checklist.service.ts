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
}
