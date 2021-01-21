import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './container/database/database.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UiModule } from '../../shared/ui/ui.module';
import { ShowCollectionsComponent } from './container/show-collections/show-collections.component';
import { CollectionSelectionComponent } from './component/collection-selection/collection-selection.component';
import { CollectionTableComponent } from './component/collection-table/collection-table.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateEntryComponent } from './container/create-entry/create-entry.component';
import { TableModule } from './component/table/table.module';
@NgModule({
  declarations: [
    DatabaseComponent,
    ShowCollectionsComponent,
    CollectionSelectionComponent,
    CollectionTableComponent,
    CreateEntryComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    TableModule,
    DatabaseRoutingModule,
    MatToolbarModule,
    UiModule,
  ],
})
export class DatabaseModule {}
