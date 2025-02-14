import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { ChecklistService } from '../../checklist/service/checklist.service';
import { ListItem } from '../../checklist/checklist';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-goals',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule,
    CommonModule, FormsModule, RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-goals.component.html',
  styleUrl: './add-goals.component.scss',
})
export class AddGoalsComponent implements OnInit {
  isEdit = false;
  id = "";
  item: ListItem = {
    itemName: '',
  };
  successMessage = "";
  goalForm !: FormGroup;
  constructor(private fb: FormBuilder, private listService: ChecklistService, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.goalForm = this.fb.group({
      itemName: new FormControl('')
    });

    const itemId = this.router.snapshot.params['id'];
    if (itemId) {
      this.isEdit = true;
      this.id = itemId;
      this.loadItem(itemId); // Load the item based on the id
      this.goalForm.patchValue({itemName: this.item.itemName});
    } else {
      this.isEdit = false;
      this.id = '';
    }
  }

  submit() {
    if(this.isEdit) {
      this.editGoal();
    } else {
      this.addGoal();
    }
  }

  editGoal() {
    this.item = {
      itemName: this.goalForm.value['itemName']
    };
    this.listService.editItem(this.id, this.item, 1);
    this.successMessage = "Item updated successfully."
    console.log(this.listService.dailyGoals);
  }

  addGoal() {
    this.item = {
      itemName: this.goalForm.value['itemName']
    };
    this.listService.addDailyGoals(this.item);
    this.successMessage = "Item added successfully.";
  
    // Reset the form values
    this.goalForm.reset({
      itemName: ''  // Default value for itemName after reset
    });

    Object.keys(this.goalForm.controls).forEach(key => {
      //@ts-ignore
      this.goalForm.controls[key].setErrors(null);
    });
    
  }
  
  // Method to load the item for editing
  loadItem(itemId: string) {
    const item = this.listService.getItemById(itemId, 1); // Assume this method exists to get an item by ID
    if (item) {
      this.item = item;
    }
    console.log(item);
  }
  
}
