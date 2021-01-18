import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'finder-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss'],
})
export class CopyComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CopyComponent>) {}

  ngOnInit(): void {}
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
