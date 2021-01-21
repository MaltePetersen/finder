import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Folder } from '../../../model/folder.interface';
import { ApiService } from '../../../services/api/api-service.service';
import { CurrentFileService } from '../../../services/currentFile/current-file.service';
import { FileNodeService } from '../../../services/filenode/filenode.service';
import { CopyComponent } from '../copy/copy.component';

@Component({
  selector: 'finder-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.scss'],
})
export class ChangeNameComponent implements OnInit {
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
  changeName() {
    const oldPath: string = this.data.file.path;
    const newPath = `${oldPath.substring(0, oldPath.lastIndexOf('/'))}/${this.form.get('file').value}`;
    if (this.data.file.type === 'file') {
      this.apiService.updateFileName({ path: oldPath, newPath: newPath }).subscribe();
    } else {
      this.apiService.updateDirectory({ path: oldPath, newPath: newPath }).subscribe();
    }
    this.currentFileService.updateCurrentFile(null);
    this.currentFileService.updateCurrentFile(this.data.file);
    this.fileNodeService.load();
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}