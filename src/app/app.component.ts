import { Component } from '@angular/core';
import { ChecklistComponent } from './checklist/checklist.component'; // Import ChecklistComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Mark it as standalone
  imports: [ChecklistComponent]  // Include ChecklistComponent here
})
export class AppComponent {
  title = 'angulartest';
}
