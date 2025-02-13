import { Component } from '@angular/core';
import { ChecklistComponent } from './checklist/checklist.component'; // Import ChecklistComponent
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Mark it as standalone
  imports: [RouterModule, NavigationComponent]  // Include ChecklistComponent here
})
export class AppComponent {
  title = 'angulartest';
}
