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
import { CreateCollectionComponent } from './component/create-collection/create-collection.component';
import { CurrentSelectionComponent } from './component/current-selection/current-selection.component';
import { DeleteCollectionComponent } from './component/delete-collection/delete-collection.component';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { RenameCollectionComponent } from './component/rename-collection/rename-collection.component';
import { DeleteEntryComponent } from './component/collection-table/delete-entry/delete-entry.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateEntryComponent } from './component/collection-table/update-entry/update-entry.component';

@NgModule({
  declarations: [
    DatabaseComponent,
    CollectionSelectionComponent,
    CollectionTableComponent,
    CreateEntryComponent,
    CreateCollectionComponent,
    CurrentSelectionComponent,
    DeleteCollectionComponent,
    RenameCollectionComponent,
    DeleteEntryComponent,
    UpdateEntryComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    TableModule,
    MatDialogModule,
    DatabaseRoutingModule,
    MatToolbarModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class DatabaseModule {}
