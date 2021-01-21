import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finder-collection-selection',
  templateUrl: './collection-selection.component.html',
  styleUrls: ['./collection-selection.component.scss'],
})
export class CollectionSelectionComponent implements OnInit {
  collections = ['one', 'two', 'three'];
  constructor() {}

  ngOnInit(): void {}
}
