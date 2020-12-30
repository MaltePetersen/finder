import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './containers/file-manager-container/file-manager.component';
import { UiModule } from '../../shared/ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { FileManagerToolbarComponent } from './components/file-manager-toolbar/file-manager-toolbar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FileManagerComponent, FileManagerToolbarComponent],
  imports: [CommonModule, HttpClientModule, FileManagerRoutingModule, UiModule, MatButtonModule],
})
export class FileManagerModule {}
