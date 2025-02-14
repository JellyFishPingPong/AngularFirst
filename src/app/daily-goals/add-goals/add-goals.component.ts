import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { ChecklistService } from '../../checklist/service/checklist.service';
import { ListItem } from '../../checklist/checklist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-goals',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule,
    CommonModule, FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-goals.component.html',
  styleUrl: './add-goals.component.scss',
})
export class AddGoalsComponent implements OnInit {
  goalForm !: FormGroup;
  successMessage = ''
  constructor(private fb: FormBuilder, private listService: ChecklistService) {

  }

  item: ListItem = {
    itemName: ''
  }

  ngOnInit(): void {
    this.goalForm = this.fb.group({
      itemName: new FormControl('')
    });
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
  
  
  
}
