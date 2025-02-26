import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';



@Component({
  selector: 'app-root',
  imports: [EmployeeComponent, UserComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';
}
