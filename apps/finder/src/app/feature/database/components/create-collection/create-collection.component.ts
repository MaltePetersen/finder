import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AllCollectionsService } from '../../services/all-collections/all-collections.service';
import { DatabaseApiService } from '../../services/database-api/database-api.service';

@Component({
  selector: 'finder-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss'],
})
export class CreateCollectionComponent implements OnInit {
  form: FormGroup;
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
  createCollection(name: string) {
    this.databaseApiService.createCollection(name).subscribe(() => {
      this.allCollectionsService.load();
    });
  }
}
