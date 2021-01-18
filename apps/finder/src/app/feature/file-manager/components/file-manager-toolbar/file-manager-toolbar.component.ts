import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommunicationService } from 'apps/finder/src/app/shared/ui/services/communication.service';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { CopyComponent } from './copy/copy.component';
import { CreateComponent, Folder } from './create/create.component';
import { CutComponent } from './cut/cut.component';
import { DeleteComponent } from './delete/delete.component';
import { OpenComponent } from './open/open.component';

@Component({
  selector: 'finder-file-manager-toolbar',
  templateUrl: './file-manager-toolbar.component.html',
  styleUrls: ['./file-manager-toolbar.component.scss'],
})
export class FileManagerToolbarComponent implements OnInit {
  dialogConfig = new MatDialogConfig();
  folders = new Array<Folder>();
  path = new Array<string>();

  constructor(private dialog: MatDialog, private communicationService: CommunicationService) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.communicationService.fileNode$.subscribe((fileNodes: FileNode[]) => {
      this.recursiveFolderSearch(fileNodes);
    });
  }
  recursiveFolderSearch(fileNodes: FileNode[]) {
    return fileNodes.map((fileNode: FileNode) => {
      if (fileNode.type === 'folder') {
        this.folders.push({ name: fileNode.name, path: fileNode.path });
        console.log(this.folders);
        this.recursiveFolderSearch(fileNode.children);
      }
    });
  }

  ngOnInit(): void {}
  open() {
    this.dialog.open(OpenComponent, this.dialogConfig);
  }
  create() {
    console.log(this.folders);
    this.dialogConfig.data = {
      folders: this.folders,
      path: this.path,
    };
    this.dialog.open(CreateComponent, this.dialogConfig);
  }
  cut() {
    this.dialog.open(CutComponent, this.dialogConfig);
  }
  copy() {
    this.dialog.open(CopyComponent, this.dialogConfig);
  }
  delete() {
    this.dialog.open(DeleteComponent, this.dialogConfig);
  }
}
