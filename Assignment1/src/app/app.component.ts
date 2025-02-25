import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { UserComponent } from './Components/user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AdminComponent,EmployeeComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
