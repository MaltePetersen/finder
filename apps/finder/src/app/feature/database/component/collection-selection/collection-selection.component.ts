import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../../models/collection.interface';

@Component({
  selector: 'finder-collection-selection',
  templateUrl: './collection-selection.component.html',
  styleUrls: ['./collection-selection.component.scss'],
})
export class CollectionSelectionComponent implements OnInit {
  @Input() set collections(value: Collection[]) {
    this.collectionsList = [];
    if (value) {
      value.forEach((collection) => {
        this.collectionsList.push(collection.name);
      });
    }
  }
  @Output() changeCollection = new EventEmitter<string>();
  selectedCollection: string;

  collectionsList = [];
  constructor() {}
  setCollection(collection: string) {
    this.selectedCollection = collection;
    this.changeCollection.emit(collection);
  }

  ngOnInit(): void {}
}
