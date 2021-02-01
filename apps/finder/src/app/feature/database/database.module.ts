import { NgModule } from '@angular/core';
import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './containers/database/database.component';
import { UiModule } from '../../shared/ui/ui.module';
import { CollectionSelectionComponent } from './components/collection-selection/collection-selection.component';
import { CollectionTableComponent } from './components/collection-table/collection-table.component';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';
import { DeleteCollectionComponent } from './components/delete-collection/delete-collection.component';
import { MatDividerModule } from '@angular/material/divider';
import { RenameCollectionComponent } from './components/rename-collection/rename-collection.component';
import { DeleteEntryComponent } from './components/collection-table/delete-entry/delete-entry.component';
import { UpdateEntryComponent } from './components/collection-table/update-entry/update-entry.component';

@NgModule({
  declarations: [
    DatabaseComponent,
    CollectionSelectionComponent,
    CollectionTableComponent,
    CreateEntryComponent,
    CreateCollectionComponent,
    DeleteCollectionComponent,
    RenameCollectionComponent,
    DeleteEntryComponent,
    UpdateEntryComponent,
  ],
  imports: [MatDividerModule, DatabaseRoutingModule, UiModule],
})
export class DatabaseModule {}
