import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AllCollectionsService } from '../../services/all-collections.service';
import { DatabaseApiService } from '../../services/database-api.service';

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
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [''],
    });
  }

  ngOnInit(): void {}
  createCollection(newName: string) {
    this.databaseApiService.updateCollection(this.name, newName).subscribe(() => this.allCollectionsService.load());
  }
}
