import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  currentPage = 1;
  itemsPerPage = 5;
  constructor(private dialog: MatDialog) {}
  get paginatedTasks() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.taskList.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.taskList.length / this.itemsPerPage);
  }

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
    {
      name: 'Dashboard',
      createDate: '2025-04-13',
      finishDate: '2025-04-16',
      status: 'In Process',
      notes: 'Dashboard layout with charts',
    },
    {
      name: 'Dashboard',
      createDate: '2025-04-13',
      finishDate: '2025-04-16',
      status: 'In Process',
      notes: 'Dashboard layout with charts',
    },
    {
      name: 'Dashboard',
      createDate: '2025-04-13',
      finishDate: '2025-04-16',
      status: 'In Process',
      notes: 'Dashboard layout with charts',
    },
  ];

  openAddTaskDialog() {
    const dialogRef = this.dialog.open(AddEditTaskComponent, {
      width: '720px',
      height: '650px',
      panelClass: 'rounded-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskList.push(result);
      }
    });
  }

  openEditTaskDialog(task: any, index: number) {
    const dialogRef = this.dialog.open(AddEditTaskComponent, {
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskList[index] = result;
      }
    });
  }
}
