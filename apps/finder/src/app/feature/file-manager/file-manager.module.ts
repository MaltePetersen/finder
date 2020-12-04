import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager.component';
import { UiModule } from '../../shared/ui/ui.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FileManagerComponent],
  imports: [CommonModule, HttpClientModule, FileManagerRoutingModule, UiModule],
})
export class FileManagerModule {}
