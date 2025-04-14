import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteComponent } from './quote/quote.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AddEditTaskComponent } from './dashboard/add-edit-task/add-edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, QuoteComponent, AddEditTaskComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [DashboardComponent],
})
export class TodosModule {}
