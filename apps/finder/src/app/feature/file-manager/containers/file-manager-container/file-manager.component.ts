import { Component, OnInit } from '@angular/core';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api-service.service';
import { FileNodeService } from '../../services/filenode/filenode.service';
@Component({
  selector: 'finder-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
})
export class FileManagerComponent implements OnInit {
  files$: Observable<FileNode[]>;
  isLoading = true;
  constructor(private fileNodeService: FileNodeService) {
    this.files$ = this.fileNodeService.fileNode$.pipe(
      tap((data) => console.log(data)),
      tap((data) => (this.isLoading = data.length === 0))
    );
  }
  ngOnInit(): void {}
}
