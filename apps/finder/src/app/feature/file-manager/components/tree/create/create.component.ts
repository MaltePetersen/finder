import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Folder } from '../../../model/folder.interface';
import { FileNodeService } from '../../../services/filenode/filenode.service';
@Component({
  selector: 'finder-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  folders$: Observable<Folder[]>;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateComponent>,
    private fileNodeService: FileNodeService
  ) {
    this.folders$ = this.fileNodeService.folders$;
    this.form = this.fb.group({
      fileName: [''],
    });
  }
  ngOnInit(): void {}
  create() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
