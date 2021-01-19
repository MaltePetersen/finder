import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api-service.service';
import { CommunicationService } from '../../services/communication/communication.service';
@Component({
  selector: 'finder-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
})
export class FileManagerComponent implements OnInit {
  files$ = this.api.getFileNode();

  constructor(private api: ApiService, private communication: CommunicationService) {}
  data$ = this.api.getFolder();
  ngOnInit(): void {
    this.files$.subscribe((data) => this.communication.addFileNode(data));
  }
}
