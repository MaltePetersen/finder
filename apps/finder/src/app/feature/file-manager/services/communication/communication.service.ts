import { Injectable } from '@angular/core';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Folder } from '../../model/folder.interface';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private fileNode$$ = new BehaviorSubject<FileNode[]>([]);
  public fileNode$ = this.fileNode$$.asObservable();
  private currentFile$$ = new BehaviorSubject<FileNode>(null);
  public currentFile$ = this.currentFile$$.asObservable();
  public folders$ = this.fileNode$.pipe(
    map((fileNodes: FileNode[]) => {
      this.folders = [];
      this.recursiveFolderSearch(fileNodes);
      return this.folders;
    })
  );
  folders = new Array<Folder>();
  path = new Array<string>();
  constructor() {}
  addFileNode(node: FileNode[]) {
    this.fileNode$$.next(node);
  }
  updateCurrentFile(node: FileNode) {
    this.currentFile$$.next(node);
  }

  recursiveFolderSearch(fileNodes: FileNode[]) {
    return fileNodes.map((fileNode: FileNode) => {
      if (fileNode.type === 'folder') {
        this.folders.push({ name: fileNode.name, path: fileNode.path });
        console.log(this.folders);
        this.recursiveFolderSearch(fileNode.children);
      }
    });
  }
}
