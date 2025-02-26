import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Import the standalone component
import { EmployeeComponent } from './app/employee/employee.component';
import { UserComponent } from './app/user/user.component';
import { AdminComponent } from './app/admin/admin.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,   // ✅ Import instead of declaring
    EmployeeComponent,
    UserComponent,
    AdminComponent
  ],
  providers: [],
})
export class AppModule { }

// Bootstrap the standalone AppComponent
bootstrapApplication(AppComponent).catch(err => console.error(err));
