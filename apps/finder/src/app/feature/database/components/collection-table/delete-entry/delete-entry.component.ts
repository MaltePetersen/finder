import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CurrentCollectionService } from '../../../services/current-collection/current-collection.service';
import { DatabaseApiService } from '../../../services/database-api/database-api.service';

@Component({
  selector: 'finder-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.scss'],
})
export class DeleteEntryComponent implements OnInit {
  id: string;
  collectionName: string;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<DeleteEntryComponent>,
    private databaseApiService: DatabaseApiService,
    private currentCollectionService: CurrentCollectionService
  ) {
    this.id = data.id;
    this.collectionName = data.collectionName;
  }

  ngOnInit(): void {}
  delete() {
    this.databaseApiService
      .deleteEntry(this.collectionName, this.id)
      .subscribe(() => this.currentCollectionService.updateCurrentCollection(this.collectionName));
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
