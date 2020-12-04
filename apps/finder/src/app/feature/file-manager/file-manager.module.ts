import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager.component';
import { UiModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [FileManagerComponent],
  imports: [CommonModule, FileManagerRoutingModule, UiModule],
})
export class FileManagerModule {}
