import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userData = {
    username: 'user123',
    email: 'user@example.com',
    status: 'Active',
  };
}
