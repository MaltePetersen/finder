import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FileNode, Stats } from 'libs/shared/src/lib/api-dtos';
import { Observable, of } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { FileManagerApiService } from '../../services/file-manager-api/file-manager-api.service';
import { CurrentFileService } from '../../services/currentFile/current-file.service';
import { CopyComponent } from './copy/copy.component';
import { CutComponent } from './cut/cut.component';
import { DeleteComponent } from './delete/delete.component';
import { OpenComponent } from './open/open.component';
import { ChangeNameComponent } from './change-name/change-name.component';
@Component({
  selector: 'finder-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  file$: Observable<any>;
  dialogConfig = new MatDialogConfig();
  isLoading = false;
  constructor(
    private currentFileService: CurrentFileService,
    private apiService: FileManagerApiService,
    private dialog: MatDialog
  ) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.file$ = this.currentFileService.currentFile$.pipe(
      tap((fileNode: FileNode) => (fileNode !== null ? (this.isLoading = true) : '')),
      delay(300),
      switchMap((fileNode: FileNode) => {
        if (fileNode) {
          const fileStats = this.apiService.getStatsOfFile(fileNode?.path);
          return fileStats.pipe(
            map((stats) => {
              return { fileNode: fileNode, stats: stats };
            })
          );
        }
        return of(null);
      }),
      tap(() => (this.isLoading = false))
    );
  }

  ngOnInit(): void {}
  open(file: FileNode) {
    this.dialogConfig.data = {
      file: file,
    };
    this.dialog.open(OpenComponent, this.dialogConfig);
  }
  change(file: FileNode) {
    this.dialogConfig.data = {
      file: file,
    };
    this.dialog.open(ChangeNameComponent, this.dialogConfig);
  }

  cut(file: FileNode) {
    this.dialogConfig.data = {
      file: file,
    };
    this.dialog.open(CutComponent, this.dialogConfig);
  }
  copy(file: FileNode) {
    this.dialogConfig.data = {
      file: file,
    };
    this.dialog.open(CopyComponent, this.dialogConfig);
  }
  delete(file: FileNode) {
    this.dialogConfig.data = {
      file: file,
    };
    this.dialog.open(DeleteComponent, this.dialogConfig);
  }
}
