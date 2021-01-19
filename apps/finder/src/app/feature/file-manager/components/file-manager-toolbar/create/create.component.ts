import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export type Folder = { name: string; path: string };
@Component({
  selector: 'finder-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  folders: Folder[];
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    console.log(data);
    this.folders = data.folders;
    this.form = this.fb.group({
      fileName: [''],
    });
  }
  ngOnInit(): void {}
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
  choose(folder: Folder) {
    console.log(folder);
  }
}
