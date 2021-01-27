import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { TableComponent } from './table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExpandedDetailDefDirective } from './directives/expanded-detail-def.directive';
import { ColSpanDirective } from './directives/col-span.directive';
import { ExpandedDetailContainerComponent } from './expanded-detail-container/expanded-detail-container.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TableComponent, ExpandedDetailDefDirective, ExpandedDetailContainerComponent, ColSpanDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    TableVirtualScrollModule,
  ],
  exports: [
    TableComponent,
    MatTableModule,
    MatButtonModule,
    ScrollingModule,
    TableVirtualScrollModule,
    ExpandedDetailDefDirective,
    ColSpanDirective,
  ],
})
export class TableModule {}
