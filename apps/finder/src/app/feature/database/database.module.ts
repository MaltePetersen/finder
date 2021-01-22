import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './container/database/database.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UiModule } from '../../shared/ui/ui.module';
import { CollectionSelectionComponent } from './component/collection-selection/collection-selection.component';
import { CollectionTableComponent } from './component/collection-table/collection-table.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateEntryComponent } from './component/create-entry/create-entry.component';
import { TableModule } from './component/table/table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateComponent } from './container/create/create.component';
import { CreateCollectionComponent } from './component/create-collection/create-collection.component';
import { CurrentSelectionComponent } from './component/current-selection/current-selection.component';
import { DeleteCollectionComponent } from './component/delete-collection/delete-collection.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    DatabaseComponent,
    CollectionSelectionComponent,
    CollectionTableComponent,
    CreateEntryComponent,
    CreateComponent,
    CreateCollectionComponent,
    CurrentSelectionComponent,
    DeleteCollectionComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    TableModule,
    DatabaseRoutingModule,
    MatToolbarModule,
    UiModule,
  ],
})
export class DatabaseModule {}
