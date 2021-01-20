import { Injectable } from '@angular/core';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Folder } from '../../model/folder.interface';
import { ApiService } from '../api/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class FileNodeService {
  private fileNode$$ = new BehaviorSubject<FileNode[]>([]);
  public fileNode$ = this.fileNode$$.asObservable().pipe(tap((data) => console.log(data)));
  folders = new Array<Folder>();
  path = new Array<string>();
  public folders$ = this.fileNode$.pipe(
    map((fileNodes: FileNode[]) => {
      this.folders = [];
      this.recursiveFolderSearch(fileNodes);
      return this.folders;
    })
  );
  recursiveFolderSearch(fileNodes: FileNode[]) {
    return fileNodes.map((fileNode: FileNode) => {
      if (fileNode.type === 'folder') {
        this.folders.push({ name: fileNode.name, path: fileNode.path });
        console.log(this.folders);
        this.recursiveFolderSearch(fileNode.children);
      }
    });
  }

  private files$ = this.apiService.getFileNode();

  constructor(private apiService: ApiService) {
    this.load();
  }
  load() {
    this.files$.subscribe((fileNodes: FileNode[]) => this.fileNode$$.next(fileNodes));
  }
}
