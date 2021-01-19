import { Component, OnInit } from '@angular/core';
import { FileNode, Stats } from 'libs/shared/src/lib/api-dtos';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api-service.service';
import { CommunicationService } from '../../services/communication/communication.service';
@Component({
  selector: 'finder-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  file$: Observable<any>;
  test: Stats<any>;
  loading = true;
  constructor(private communicationService: CommunicationService, private apiService: ApiService) {
    this.file$ = this.communicationService.currentFile$.pipe(
      switchMap((obs1: FileNode) => {
        if (obs1) {
          const obs2 = this.apiService.getStatsOfFile(obs1?.path);
          return obs2.pipe(map((value) => [obs1, value]));
        }
        return of([null, null]);
      }),
      tap((data) => console.log(data))
    );
  }

  ngOnInit(): void {}
}
