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
  collectionName$: Observable<string>;
  currentCollection$: Observable<any>;
  constructor(
    private allCollectionsService: AllCollectionsService,
    private currentCollectionService: CurrentCollectionService,
    private currentCollectionName: CurrentCollectionnNameService
  ) {
    this.allCollections$ = allCollectionsService.collections$;
    this.currentCollection$ = currentCollectionService.currentCollection$;
    this.collectionName$ = currentCollectionName.currentCollectionName$;
  }
  setCollection(collectionName: string) {
    this.currentCollectionService.updateCurrentCollection(collectionName);
  }
  ngOnInit(): void {}
}
