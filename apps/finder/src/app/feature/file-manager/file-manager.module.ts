import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './containers/file-manager-container/file-manager.component';
import { UiModule } from '../../shared/ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { FileManagerToolbarComponent } from './components/file-manager-toolbar/file-manager-toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { FileComponent } from './components/file/file.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { OpenComponent } from './components/file-manager-toolbar/open/open.component';
import { CopyComponent } from './components/file-manager-toolbar/copy/copy.component';
import { CreateComponent } from './components/file-manager-toolbar/create/create.component';
import { DeleteComponent } from './components/file-manager-toolbar/delete/delete.component';
import { CutComponent } from './components/file-manager-toolbar/cut/cut.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

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
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FileManagerRoutingModule,
    MatIconModule,
    MatDialogModule,
    UiModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class FileManagerModule {}
