import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userTaskData = [
    { status: 'Total', value: '15', icon: 'fas fa-sync-alt' },
    { status: 'Pending', value: '5', icon: 'fas fa-hourglass-start' },
    { status: 'In Progress', value: '3', icon: 'fas fa-spinner' },
    { status: 'Completed', value: '6', icon: 'fas fa-check-circle' },
    { status: 'On Hold', value: '1', icon: 'fas fa-pause-circle' },
    { status: 'Cancelled', value: '0', icon: 'fas fa-times-circle' },
    { status: 'Overdue', value: '2', icon: 'fas fa-exclamation-circle' },
  ];
  taskList = [
    {
      name: 'Login',
      createDate: '2025-04-13',
      finishDate: '2025-04-14',
      status: 'Completed',
      notes: 'Login functionality with validation',
    },
    {
      name: 'Register',
      createDate: '2025-04-13',
      finishDate: '2025-04-15',
      status: 'Pending',
      notes: 'Basic registration form',
    },
    {
      name: 'Dashboard',
      createDate: '2025-04-13',
      finishDate: '2025-04-16',
      status: 'In Process',
      notes: 'Dashboard layout with charts',
    },
  ];
}
