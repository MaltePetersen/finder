import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Collection } from '../models/collection.interface';
import { CurrentCollectionnNameService } from './current-collectionn-name.service';
import { DatabaseApiService } from './database-api.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentCollectionService {
  private currentCollection$$ = new BehaviorSubject<any>(null);
  public currentCollection$ = this.currentCollection$$.asObservable();
  constructor(
    private databaseApiService: DatabaseApiService,
    private currentCollectionNameService: CurrentCollectionnNameService
  ) {}

  updateCurrentCollection(collection: string) {
    this.currentCollectionNameService.updateCurrentCollection(collection);
    this.databaseApiService.getCollection(collection).subscribe((collectionDocuments: Array<any>) => {
      this.currentCollection$$.next(collectionDocuments);
    });
  }
}
