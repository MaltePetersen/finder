import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { delayWhen, startWith, take } from 'rxjs/operators';
import { CurrentCollectionnNameService } from '../current-collectionn-name/current-collectionn-name.service';
import { DatabaseApiService } from '../database-api/database-api.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentCollectionService {
  private currentCollection$$ = new BehaviorSubject<any>([]);
  public currentCollection$ = this.currentCollection$$.asObservable();
  constructor(
    private databaseApiService: DatabaseApiService,
    private currentCollectionNameService: CurrentCollectionnNameService
  ) {}

  updateCurrentCollection(collection: string) {
    this.currentCollectionNameService.updateCurrentCollection(collection);
    this.databaseApiService
      .getCollection(collection)
      .pipe(startWith(null), delayWhen(this.delay), take(2))
      .subscribe((collectionDocuments: Array<any>) => {
        this.currentCollection$$.next(collectionDocuments);
      });
  }
  delay = (collection: any) => {
    if (!collection) {
      return timer(0);
    }
    return timer(500);
  };
}
