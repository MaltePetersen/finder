import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatabaseApiService } from './database-api.service';
import { Collection } from '../models/collection.interface';
@Injectable({
  providedIn: 'root',
})
export class AllCollectionsService {
  private collections$$ = new BehaviorSubject<Collection[]>(null);
  public collections$ = this.collections$$.asObservable();
  constructor(private databaseApiSerice: DatabaseApiService) {
    this.load();
  }
  load() {
    this.databaseApiSerice
      .getAllCollections()
      .subscribe((collections: Collection[]) => this.collections$$.next(collections));
  }
}
