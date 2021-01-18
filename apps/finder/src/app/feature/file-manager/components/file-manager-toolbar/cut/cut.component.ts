import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'finder-cut',
  templateUrl: './cut.component.html',
  styleUrls: ['./cut.component.scss'],
})
export class CutComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CutComponent>) {}

  ngOnInit(): void {}
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
