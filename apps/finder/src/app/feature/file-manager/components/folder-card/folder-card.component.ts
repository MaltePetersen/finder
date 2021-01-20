import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../../model/folder.interface';

@Component({
  selector: 'finder-folder-card',
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss'],
})
export class FolderCardComponent implements OnInit {
  @Input() folder: Folder;
  isCurrentFolder = false;
  @Input() set currentFolder(value: Folder) {
    console.log(value);
    console.log(this.folder);
    this.isCurrentFolder = this.folder && value === this.folder ? true : false;
    console.log(this.isCurrentFolder);
  }
  constructor() {}

  ngOnInit(): void {}
}
