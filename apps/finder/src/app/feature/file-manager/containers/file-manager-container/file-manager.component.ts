import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
@Component({
  selector: 'finder-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
})
export class FileManagerComponent implements OnInit {
  constructor(private api: ApiService) {}
  files$ = this.api.getFileNode();
  data$ = this.api.getFolder();
  ngOnInit(): void {
    this.api.getFolder().subscribe((data) => console.log(data));
  }
}
