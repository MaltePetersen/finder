import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [DatabaseComponent],
  imports: [CommonModule, DatabaseRoutingModule, MatToolbarModule],
})
export class DatabaseModule {}
