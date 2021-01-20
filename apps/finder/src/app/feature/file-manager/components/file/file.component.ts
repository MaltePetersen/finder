import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FileNode, Stats } from 'libs/shared/src/lib/api-dtos';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api-service.service';
import { CommunicationService } from '../../services/communication/communication.service';
import { CopyComponent } from './copy/copy.component';
import { CutComponent } from './cut/cut.component';
import { DeleteComponent } from './delete/delete.component';
import { OpenComponent } from './open/open.component';
@Component({
  selector: 'finder-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  file$: Observable<any>;
  dialogConfig = new MatDialogConfig();

  test: Stats<any>;
  loading = true;
  constructor(
    private communicationService: CommunicationService,
    private apiService: ApiService,
    private dialog: MatDialog
  ) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.file$ = this.communicationService.currentFile$.pipe(
      switchMap((obs1: FileNode) => {
        if (obs1) {
          const obs2 = this.apiService.getStatsOfFile(obs1?.path);
          return obs2.pipe(map((value) => [obs1, value]));
        }
        return of([null, null]);
      })
    );
  }

  ngOnInit(): void {}
  open(file: FileNode) {
    this.dialogConfig.data = {
      file: file,
    };
    this.dialog.open(OpenComponent, this.dialogConfig);
  }

  cut() {
    this.dialog.open(CutComponent, this.dialogConfig);
  }
  copy() {
    this.dialog.open(CopyComponent, this.dialogConfig);
  }
  delete() {
    this.dialog.open(DeleteComponent, this.dialogConfig);
  }
}
