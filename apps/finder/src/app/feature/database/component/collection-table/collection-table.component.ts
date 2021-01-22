import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finder-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.scss'],
})
export class CollectionTableComponent implements OnInit {
  example = [
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
    { name: 'element1' },
    { name: 'element2' },
  ];
  defaultColumns = ['id'];
  constructor() {}

  ngOnInit(): void {}
}
