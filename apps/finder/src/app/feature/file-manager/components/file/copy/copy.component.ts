import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Folder } from '../../../model/folder.interface';
import { ApiService } from '../../../services/api/api-service.service';
import { CurrentFileService } from '../../../services/currentFile/current-file.service';
import { FileNodeService } from '../../../services/filenode/filenode.service';

@Component({
  selector: 'finder-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss'],
})
export class CopyComponent implements OnInit {
  form: FormGroup;
  currentFolder: Folder;
  disabled = true;
  constructor(
    private fileNodeService: FileNodeService,
    private currentFileService: CurrentFileService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<CopyComponent>
  ) {
    this.form = this.fb.group({
      file: [''],
    });
    this.form.get('file').valueChanges.subscribe((value) => (this.disabled = value === ''));
  }

  ngOnInit(): void {}
  copy() {
    const fromPath = this.data.file.path;
    const toPath = `${this.currentFolder.path}/${this.form.get('file').value}`;
    if (this.data.file.type === 'file') {
      this.apiService.copyFile(fromPath, toPath).subscribe();
    } else {
      this.apiService.copyDirectory(fromPath, toPath).subscribe();
    }
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
