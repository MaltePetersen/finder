import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Folder } from '../../model/folder.interface';
import { FileNodeService } from '../../services/filenode/filenode.service';

@Component({
  selector: 'finder-folderchoser',
  templateUrl: './folderchoser.component.html',
  styleUrls: ['./folderchoser.component.scss'],
})
export class FolderchoserComponent implements OnInit {
  folders$: Observable<Folder[]>;
  currentFolder: Folder;

  constructor(private fileNodeService: FileNodeService) {
    this.folders$ = this.fileNodeService.folders$;
  }

  ngOnInit(): void {}
  choose(folder: Folder) {
    this.currentFolder = folder;
    console.log(folder);
  }
}
