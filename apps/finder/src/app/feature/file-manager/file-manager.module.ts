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

@NgModule({
  declarations: [FileManagerComponent, FileManagerToolbarComponent, FileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FileManagerRoutingModule,
    MatIconModule,
    UiModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class FileManagerModule {}
