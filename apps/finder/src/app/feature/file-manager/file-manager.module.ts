import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UiModule } from '../../shared/ui/ui.module';
import { FolderCardComponent } from '../file-manager/components/folder-card/folder-card.component';
import { TreeComponent } from '../file-manager/components/tree/tree.component';
import { CopyComponent } from './components/file-manager-toolbar/copy/copy.component';
import { CreateComponent } from './components/tree/create/create.component';
import { CutComponent } from './components/file-manager-toolbar/cut/cut.component';
import { DeleteComponent } from './components/file-manager-toolbar/delete/delete.component';
import { FileManagerToolbarComponent } from './components/file-manager-toolbar/file-manager-toolbar.component';
import { OpenComponent } from './components/file-manager-toolbar/open/open.component';
import { FileComponent } from './components/file/file.component';
import { FileManagerComponent } from './containers/file-manager-container/file-manager.component';
import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FolderchoserComponent } from './components/folderchoser/folderchoser.component';

@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerToolbarComponent,
    FileComponent,
    OpenComponent,
    CopyComponent,
    CreateComponent,
    DeleteComponent,
    CutComponent,
    FolderCardComponent,
    TreeComponent,
    FolderchoserComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTreeModule,
    HttpClientModule,
    FileManagerRoutingModule,
    MatIconModule,
    MatDialogModule,
    UiModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class FileManagerModule {}
