import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'finder-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<DeleteComponent>) {}

  ngOnInit(): void {}
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
