import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { ListItem } from '../checklist';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ChecklistService } from '../service/checklist.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-add',
  imports: [MatFormFieldModule, CommonModule, FormsModule, MatButtonModule, MatIconModule, MatInputModule,
    RouterModule
  ],
  templateUrl: './list-add.component.html',
  styleUrl: './list-add.component.scss'
})
export class ListAddComponent implements OnInit  {
  isEdit = false;
  id = "";
  item: ListItem = {
    itemName: '',
  };
  successMessage = "";

  constructor(private checklistService: ChecklistService, private router: ActivatedRoute) {  }

  ngOnInit(): void {
    const itemId = this.router.snapshot.params['id'];
    if (itemId) {
      this.isEdit = true;
      this.id = itemId;
      this.loadItem(itemId); // Load the item based on the id
    } else {
      this.isEdit = false;
      this.id = '';
    }
  }


  submit(listForm: NgForm) {
    if(this.isEdit) {
      this.editItem();
    } else {
      this.addItem(listForm);
    }
  }

  editItem() {
    this.checklistService.editItem(this.id, this.item, 0);
    this.successMessage = "Item updated successfully."
    console.log(this.checklistService.getListItem());
  }
  
  addItem(listForm: NgForm) {
    this.checklistService.addItem(this.item, 0);
    this.successMessage = "Item added successfully."
    console.log(this.checklistService.getListItem());
    listForm.resetForm( {
      itemName: ''
    });
  }

  // Method to load the item for editing
  loadItem(itemId: string) {
    const item = this.checklistService.getItemById(itemId, 0); // Assume this method exists to get an item by ID
    if (item) {
      this.item = item;
    }
  }
}
