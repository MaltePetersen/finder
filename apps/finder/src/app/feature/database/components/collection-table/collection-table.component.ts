import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CurrentCollectionnNameService } from '../../services/current-collectionn-name/current-collectionn-name.service';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';

@Component({
  selector: 'finder-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.scss'],
})
export class CollectionTableComponent implements OnInit {
  @Input() set collection(value: any) {
    this.dataSource = value;
  }
  dialogConfig = new MatDialogConfig();
  currentCollectionName: string;
  dataSource = [];
  defaultColumns = ['id'];
  constructor(private dialog: MatDialog, private currentCollectionNameService: CurrentCollectionnNameService) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.currentCollectionNameService.currentCollectionName$.subscribe(
      (collection) => (this.currentCollectionName = collection)
    );
  }

  ngOnInit(): void {}
  update(id: string) {
    this.dialogConfig.data = {
      id: id,
      collectionName: this.currentCollectionName,
    };
    this.dialog.open(UpdateEntryComponent, this.dialogConfig);
  }
  delete(id: string) {
    this.dialogConfig.data = {
      id: id,
      collectionName: this.currentCollectionName,
    };
    this.dialog.open(DeleteEntryComponent, this.dialogConfig);
  }
}
