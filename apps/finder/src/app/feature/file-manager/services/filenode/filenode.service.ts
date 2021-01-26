import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { BehaviorSubject, combineLatest, timer } from 'rxjs';
import { delayWhen, map, startWith } from 'rxjs/operators';
import { ApiService } from '../api/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class FileNodeService {
  constructor(private apiService: ApiService) {
    this.load();
  }
  private fileNode$$ = new BehaviorSubject<FileNode[]>([]);
  public fileNode$ = this.fileNode$$.asObservable();
  private files$ = this.apiService.getFileNode();

  public subFolders$ = this.fileNode$.pipe(
    map((fileNodes: FileNode[]) => {
      return this.recursiveFolderSearch(fileNodes);
    })
  );
  public workspace$ = this.apiService.getWorkspace().pipe(
    map((workspace: any) => {
      return { name: 'Workspace', type: 'folder', path: workspace.path };
    })
  );
  public folders$ = combineLatest([this.subFolders$, this.workspace$]).pipe(
    map(([fileNodes, fileNode]) => {
      fileNodes.unshift(fileNode);
      return fileNodes;
    })
  );
  recursiveFolderSearch(fileNodes: FileNode[]) {
    let folders = [];
    if (fileNodes !== null) {
      fileNodes.forEach((fileNode: FileNode) => {
        if (fileNode.type === 'folder') {
          folders.push({ name: fileNode.name, path: fileNode.path });
          folders.push(...this.recursiveFolderSearch(fileNode.children));
        }
      });
    }
    return folders;
  }

  load() {
    this.files$.pipe(startWith(null), delayWhen(this.delayForFiveSeconds)).subscribe((fileNodes: FileNode[]) => {
      this.fileNode$$.next(fileNodes);
    });
  }
  delayForFiveSeconds = (data) => {
    if (data === null) {
      return timer(0);
    }
    return timer(1000);
  };
}
