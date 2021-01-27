import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'finder-expanded-detail-container',
  templateUrl: './expanded-detail-container.component.html',
  styleUrls: ['./expanded-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandedDetailContainerComponent {
  constructor(cdr: ChangeDetectorRef) {
    cdr.detach(); // we never change
  }
}
