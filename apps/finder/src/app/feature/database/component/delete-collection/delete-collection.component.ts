import { Component, Input, OnInit } from '@angular/core';
import { AllCollectionsService } from '../../services/all-collections.service';
import { DatabaseApiService } from '../../services/database-api.service';

@Component({
  selector: 'finder-delete-collection',
  templateUrl: './delete-collection.component.html',
  styleUrls: ['./delete-collection.component.scss'],
})
export class DeleteCollectionComponent implements OnInit {
  constructor(private databaseApiService: DatabaseApiService, private allCollectionsService: AllCollectionsService) {}
  @Input() set collectionName(value: string) {
    if (value) {
      this.name = value;
    }
  }
  name: string = null;
  ngOnInit(): void {}
  deleteCollection() {
    console.log(this.name);
    this.databaseApiService.deleteCollection(this.name).subscribe(() => this.allCollectionsService.load());
  }
}
