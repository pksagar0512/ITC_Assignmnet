import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  adminData = {
    name: 'Admin User',
    role: 'Administrator',
    permissions: 'Full Access',
  };
}
