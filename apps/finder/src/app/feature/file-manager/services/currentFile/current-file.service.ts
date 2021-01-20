import { Injectable } from '@angular/core';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentFileService {
  private currentFile$$ = new BehaviorSubject<FileNode>(null);
  public currentFile$ = this.currentFile$$.asObservable();
  constructor() {}
  updateCurrentFile(node: FileNode) {
    this.currentFile$$.next(node);
  }
}
