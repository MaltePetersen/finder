import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from '../../models/collection.interface';
import { AllCollectionsService } from '../../services/all-collections.service';
import { CurrentCollectionService } from '../../services/current-collection.service';
import { CurrentCollectionnNameService } from '../../services/current-collectionn-name.service';
@Component({
  selector: 'finder-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
})
export class DatabaseComponent implements OnInit {
  allCollections$: Observable<Collection[]>;
  collectionName: string;
  collectionNameInput: string = 'No Collection selected';
  currentCollection$: Observable<any>;
  constructor(
    private allCollectionsService: AllCollectionsService,
    private currentCollectionService: CurrentCollectionService,
    private currentCollectionName: CurrentCollectionnNameService
  ) {
    this.allCollections$ = allCollectionsService.collections$;
    this.currentCollection$ = currentCollectionService.currentCollection$;
  }
  setCollection(collectionName: string) {
    this.collectionName = collectionName;
    this.collectionNameInput = `Current Collection: ${collectionName}`;
    this.currentCollectionService.updateCurrentCollection(collectionName);
    this.currentCollectionName.updateCurrentCollection(collectionName);
  }
  ngOnInit(): void {}
}
