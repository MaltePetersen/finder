import { NgModule } from '@angular/core';
import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './container/database/database.component';
import { UiModule } from '../../shared/ui/ui.module';
import { CollectionSelectionComponent } from './component/collection-selection/collection-selection.component';
import { CollectionTableComponent } from './component/collection-table/collection-table.component';
import { CreateEntryComponent } from './component/create-entry/create-entry.component';
import { CreateCollectionComponent } from './component/create-collection/create-collection.component';
import { DeleteCollectionComponent } from './component/delete-collection/delete-collection.component';
import { MatDividerModule } from '@angular/material/divider';
import { RenameCollectionComponent } from './component/rename-collection/rename-collection.component';
import { DeleteEntryComponent } from './component/collection-table/delete-entry/delete-entry.component';
import { UpdateEntryComponent } from './component/collection-table/update-entry/update-entry.component';

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
