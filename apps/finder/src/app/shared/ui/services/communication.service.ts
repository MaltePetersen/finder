import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileNode } from '../tree/tree.component';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private fileNode$$ = new BehaviorSubject<FileNode[]>([]);
  public fileNode$ = this.fileNode$$.asObservable();
  constructor() {}
  addFileNode(node: FileNode[]) {
    this.fileNode$$.next(node);
  }
}
