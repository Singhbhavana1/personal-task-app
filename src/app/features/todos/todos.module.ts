import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [DashboardComponent, QuoteComponent],
  imports: [CommonModule, TodosRoutingModule],
  exports: [DashboardComponent],
})
export class TodosModule {}
