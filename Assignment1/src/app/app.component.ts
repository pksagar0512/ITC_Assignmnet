import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { RouterOutlet } from '@angular/router'; // If using routing

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component
  imports: [AdminComponent, EmployeeComponent, UserComponent],  // Import child components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Components';
}
