import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { delayWhen, startWith, take } from 'rxjs/operators';
import { CurrentCollectionnNameService } from './current-collectionn-name.service';
import { DatabaseApiService } from './database-api.service';

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
      .pipe(startWith(null), delayWhen(this.delayForFiveSeconds), take(2))
      .subscribe((collectionDocuments: Array<any>) => {
        this.currentCollection$$.next(collectionDocuments);
      });
  }
  delayForFiveSeconds = (data) => {
    if (!data) {
      return timer(0);
    }
    return timer(500);
  };
}
