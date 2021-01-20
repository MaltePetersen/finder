import { Injectable } from '@angular/core';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class FileNodeService {
  private fileNode$$ = new BehaviorSubject<FileNode[]>([]);
  public fileNode$ = this.fileNode$$.asObservable().pipe(tap((data) => console.log(data)));

  private files$ = this.apiService.getFileNode();

  constructor(private apiService: ApiService) {
    this.load();
  }
  load() {
    this.files$.subscribe((fileNodes: FileNode[]) => this.fileNode$$.next(fileNodes));
  }
}
