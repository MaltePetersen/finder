import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../../../feature/file-manager/components/file-manager-toolbar/create/create.component';

@Component({
  selector: 'finder-folder-card',
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss'],
})
export class FolderCardComponent implements OnInit {
  @Input() folder: Folder;
  constructor() {}

  ngOnInit(): void {}
}
