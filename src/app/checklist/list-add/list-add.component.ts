import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { ListItem } from '../checklist';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ChecklistService } from '../service/checklist.service';

@Component({
  selector: 'app-list-add',
  imports: [MatFormFieldModule, CommonModule, FormsModule, MatButtonModule, MatIconModule, MatInputModule],
  templateUrl: './list-add.component.html',
  styleUrl: './list-add.component.scss'
})
export class ListAddComponent  {
  constructor(private checklistService: ChecklistService) {

  }

  successMessage = "";

  item : ListItem = {
    itemName: ''
  }

  addItem(listForm: NgForm) {
    this.checklistService.addItem(this.item, 0);
    this.successMessage = "Item added successfully."
    console.log(this.checklistService.getListItem());
    listForm.resetForm( {
      itemName: ''
    });
  }
}
