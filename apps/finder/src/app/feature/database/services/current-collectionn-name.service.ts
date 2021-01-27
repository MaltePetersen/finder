import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatabaseApiService } from './database-api.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentCollectionnNameService {
  private currentCollectionName$$ = new BehaviorSubject<any>(null);
  public currentCollectionName$ = this.currentCollectionName$$.asObservable();
  constructor() {}
  updateCurrentCollection(collection: string) {
    this.currentCollectionName$$.next(collection);
  }
}
