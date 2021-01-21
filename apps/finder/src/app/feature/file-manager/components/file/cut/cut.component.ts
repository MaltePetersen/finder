import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Folder } from '../../../model/folder.interface';
import { ApiService } from '../../../services/api/api-service.service';
import { CurrentFileService } from '../../../services/currentFile/current-file.service';
import { FileNodeService } from '../../../services/filenode/filenode.service';
import { CopyComponent } from '../copy/copy.component';

@Component({
  selector: 'finder-cut',
  templateUrl: './cut.component.html',
  styleUrls: ['./cut.component.scss'],
})
export class CutComponent implements OnInit {
  form: FormGroup;
  currentFolder: Folder;
  constructor(
    private fileNodeService: FileNodeService,
    private currentFileService: CurrentFileService,
    @Inject(MAT_DIALOG_DATA) private data,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<CopyComponent>
  ) {}

  ngOnInit(): void {}
  cut() {
    const fromPath = this.data.file.path;
    const toPath = `${this.currentFolder.path}/${this.data.file.name}`;
    this.apiService.copyFile(fromPath, toPath).subscribe();
    this.apiService.deleteFile(fromPath).subscribe();
    this.currentFileService.updateCurrentFile(null);
    this.fileNodeService.load();
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
  updateCurrentFolder(folder: Folder) {
    this.currentFolder = folder;
  }
}
