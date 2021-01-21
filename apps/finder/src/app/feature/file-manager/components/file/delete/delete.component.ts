import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiService } from '../../../services/api/api-service.service';
import { CurrentFileService } from '../../../services/currentFile/current-file.service';
import { FileNodeService } from '../../../services/filenode/filenode.service';

@Component({
  selector: 'finder-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  form: FormGroup;
  deleteFile$: Observable<any>;
  constructor(
    private fileNodeService: FileNodeService,
    private currentFileService: CurrentFileService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<DeleteComponent>
  ) {
    this.deleteFile$ = this.apiService.deleteFile(data.file.path);
  }

  ngOnInit(): void {}
  delete() {
    this.deleteFile$.subscribe(() => {
      this.currentFileService.updateCurrentFile(null);
      this.fileNodeService.load();
    });
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
