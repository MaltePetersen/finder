import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../../../model/folder.interface';

@Component({
  selector: 'finder-folder-card',
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss'],
})
export class FolderCardComponent implements OnInit {
  @Input() folder: Folder;
  isCurrentFolder = false;
  @Input() set currentFolder(value: Folder) {
    this.isCurrentFolder = this.folder && value === this.folder ? true : false;
  }
  constructor() {}

  ngOnInit(): void {}
}
