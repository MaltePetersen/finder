import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'finder-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss'],
})
export class OpenComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<OpenComponent>) {}

  ngOnInit(): void {}
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
