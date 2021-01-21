import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'finder-file-manager-toolbar',
  templateUrl: './file-manager-toolbar.component.html',
  styleUrls: ['./file-manager-toolbar.component.scss'],
})
export class FileManagerToolbarComponent implements OnInit {
  @Input() description: string;
  constructor() {}

  ngOnInit(): void {}
}
