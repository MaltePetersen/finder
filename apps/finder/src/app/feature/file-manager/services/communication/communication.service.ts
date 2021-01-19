import { Injectable } from '@angular/core';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private fileNode$$ = new BehaviorSubject<FileNode[]>([]);
  public fileNode$ = this.fileNode$$.asObservable();
  private currentFile$$ = new BehaviorSubject<FileNode>(null);
  public currentFile$ = this.currentFile$$.asObservable();
  constructor() {}
  addFileNode(node: FileNode[]) {
    this.fileNode$$.next(node);
  }
  updateCurrentFile(node: FileNode) {
    this.currentFile$$.next(node);
  }
}
