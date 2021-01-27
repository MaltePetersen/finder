import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AllCollectionsService } from '../../services/all-collections/all-collections.service';
import { CurrentCollectionService } from '../../services/current-collection/current-collection.service';
import { CurrentCollectionnNameService } from '../../services/current-collectionn-name/current-collectionn-name.service';
import { DatabaseApiService } from '../../services/database-api/database-api.service';

@Component({
  selector: 'finder-rename-collection',
  templateUrl: './rename-collection.component.html',
  styleUrls: ['./rename-collection.component.scss'],
})
export class RenameCollectionComponent implements OnInit {
  form: FormGroup;
  @Input() set collectionName(value: string) {
    if (value) {
      this.name = value;
    }
  }
  name: string;
  constructor(
    private databaseApiService: DatabaseApiService,
    private allCollectionsService: AllCollectionsService,
    private currentCollectionService: CurrentCollectionService,
    private currenCollectionNameService: CurrentCollectionnNameService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [''],
    });
  }

  ngOnInit(): void {}
  createCollection(newName: string) {
    this.databaseApiService.updateCollection(this.name, newName).subscribe(() => {
      this.allCollectionsService.load();
      this.currentCollectionService.updateCurrentCollection(newName);
      this.currenCollectionNameService.updateCurrentCollection(newName);
    });
  }
}
