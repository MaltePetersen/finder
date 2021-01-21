import { Injectable } from '@angular/core';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { BehaviorSubject, timer } from 'rxjs';
import { delay, delayWhen, map, startWith, tap } from 'rxjs/operators';
import { ApiService } from '../api/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class FileNodeService {
  private fileNode$$ = new BehaviorSubject<FileNode[]>([]);
  public fileNode$ = this.fileNode$$.asObservable();
  private files$ = this.apiService.getFileNode();
  public folders$ = this.fileNode$.pipe(
    map((fileNodes: FileNode[]) => {
      return this.recursiveFolderSearch(fileNodes);
    }),
    map((fileNodes: FileNode[]) => {
      if (fileNodes.length !== 0) {
        fileNodes.unshift({
          name: 'Workspace',
          type: 'folder',
          path: fileNodes[0].path.substring(0, fileNodes[0].path.lastIndexOf('/')),
        });
      }

      return fileNodes;
    })
  );
  recursiveFolderSearch(fileNodes: FileNode[]) {
    let folders = [];
    fileNodes.forEach((fileNode: FileNode) => {
      if (fileNode.type === 'folder') {
        folders.push({ name: fileNode.name, path: fileNode.path });
        folders.push(...this.recursiveFolderSearch(fileNode.children));
      }
    });
    return folders;
  }
  constructor(private apiService: ApiService) {
    this.load();
  }
  load() {
    this.files$
      .pipe(startWith([]), delayWhen(this.delayForFiveSeconds))
      .subscribe((fileNodes: FileNode[]) => this.fileNode$$.next(fileNodes));
  }
  delayForFiveSeconds = (data) => {
    if (data.length === 0) {
      return timer(0);
    }
    return timer(1000);
  };
}
