import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { UiModule } from '../../shared/ui/ui.module';
import { FolderCardComponent } from '../file-manager/components/folderchoser/folder-card/folder-card.component';
import { TreeComponent } from '../file-manager/components/tree/tree.component';
import { ChangeNameComponent } from './components/file/change-name/change-name.component';
import { CopyComponent } from './components/file/copy/copy.component';
import { CutComponent } from './components/file/cut/cut.component';
import { DeleteComponent } from './components/file/delete/delete.component';
import { FileComponent } from './components/file/file.component';
import { OpenComponent } from './components/file/open/open.component';
import { FolderchoserComponent } from './components/folderchoser/folderchoser.component';
import { CreateComponent } from './components/tree/create/create.component';
import { FileManagerComponent } from './containers/file-manager-container/file-manager.component';
import { FileManagerRoutingModule } from './file-manager-routing.module';

@NgModule({
  declarations: [
    FileManagerComponent,
    FileComponent,
    OpenComponent,
    CopyComponent,
    CreateComponent,
    DeleteComponent,
    CutComponent,
    FolderCardComponent,
    TreeComponent,
    FolderchoserComponent,
    ChangeNameComponent,
  ],
  imports: [
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    FileManagerRoutingModule,
    MatIconModule,
    UiModule,
    MatListModule,
  ],
})
export class FileManagerModule {}
