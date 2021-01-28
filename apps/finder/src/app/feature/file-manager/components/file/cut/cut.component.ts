import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Folder } from '../../../model/folder.interface';
import { FileManagerApiService } from '../../../services/file-manager-api/file-manager-api.service';
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
    private apiService: FileManagerApiService,
    private dialogRef: MatDialogRef<CopyComponent>
  ) {}

  ngOnInit(): void {}
  cut() {
    const fromPath = this.data.file.path;
    const toPath = `${this.currentFolder.path}/${this.data.file.name}`;
    if (this.data.file.type === 'file') {
      this.apiService.copyFile(fromPath, toPath).subscribe();
      this.apiService.deleteFile(fromPath).subscribe();
    } else {
      this.apiService.copyDirectory(fromPath, toPath).subscribe();
      this.apiService.deleteDirectory(fromPath).subscribe();
    }
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
