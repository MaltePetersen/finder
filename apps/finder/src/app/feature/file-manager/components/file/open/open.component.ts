import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FileManagerApiService } from '../../../services/file-manager-api/file-manager-api.service';

@Component({
  selector: 'finder-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss'],
})
export class OpenComponent implements OnInit {
  contentsOfFile$: Observable<any>;
  constructor(
    private dialogRef: MatDialogRef<OpenComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private apiService: FileManagerApiService
  ) {
    this.contentsOfFile$ = this.apiService.readFile(data.file.path);
  }

  ngOnInit(): void {}
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
