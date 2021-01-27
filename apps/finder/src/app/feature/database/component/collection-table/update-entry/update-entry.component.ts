import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CurrentCollectionService } from '../../../services/current-collection/current-collection.service';
import { DatabaseApiService } from '../../../services/database-api/database-api.service';
import { jsonValidator } from '../../../util/json-validator';

@Component({
  selector: 'finder-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.scss'],
})
export class UpdateEntryComponent implements OnInit {
  form: FormGroup;
  id: string;
  collectionName: string;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data,
    private databaseApiService: DatabaseApiService,
    private currentCollectionService: CurrentCollectionService,
    private dialogRef: MatDialogRef<UpdateEntryComponent>
  ) {
    this.id = data.id;
    this.collectionName = data.collectionName;
    this.form = this.fb.group({
      entry: [''],
    });
    this.form.get('entry').setValidators([Validators.required, jsonValidator()]);
  }

  ngOnInit(): void {}
  update(entry: string) {
    this.databaseApiService
      .updateEntry(JSON.parse(entry), this.collectionName, this.id)
      .subscribe(() => this.currentCollectionService.updateCurrentCollection(this.collectionName));
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
