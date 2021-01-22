import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Collection } from '../models/collection.interface';
import { DatabaseApiService } from './database-api.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentCollectionService {
  private currentCollection$$ = new BehaviorSubject<any>(null);
  public currentCollection$ = this.currentCollection$$.asObservable();
  constructor(private databaseApiService: DatabaseApiService) {}
  updateCurrentCollection(collection: string) {
    this.databaseApiService.getCollection(collection).subscribe((collectionDocuments: Array<any>) => {
      this.currentCollection$$.next(collectionDocuments);
    });
  }
}
