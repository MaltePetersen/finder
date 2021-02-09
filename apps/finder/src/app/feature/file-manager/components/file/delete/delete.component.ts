import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FileManagerApiService } from '../../../services/file-manager-api/file-manager-api.service';
import { CurrentFileService } from '../../../services/currentFile/current-file.service';
import { FileNodeService } from '../../../services/filenode/filenode.service';

@Component({
  selector: 'finder-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  form: FormGroup;
  delete$: Observable<any>;
  type: string;
  constructor(
    private fileNodeService: FileNodeService,
    private currentFileService: CurrentFileService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data,
    private apiService: FileManagerApiService,
    private dialogRef: MatDialogRef<DeleteComponent>
  ) {
    this.type = data.file.type;
    this.delete$ =
      data.file.type === 'file'
        ? this.apiService.deleteFile(data.file.path)
        : this.apiService.deleteDirectory(data.file.path);
  }

  ngOnInit(): void {}
  delete() {
    this.delete$.subscribe(() => {
      this.currentFileService.updateCurrentFile(null);
      this.fileNodeService.load();
    });
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
