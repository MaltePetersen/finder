import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentCollectionService } from '../../services/current-collection/current-collection.service';
import { DatabaseApiService } from '../../services/database-api/database-api.service';
import { jsonValidator } from '../../util/json-validator';
@Component({
  selector: 'finder-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss'],
})
export class CreateEntryComponent implements OnInit {
  @Input() set collectionName(value: string) {
    if (value) {
      this.name = value;
    }
  }
  name: string = null;
  form: FormGroup;
  constructor(
    private databaseApiService: DatabaseApiService,
    private currentSelectionService: CurrentCollectionService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      entry: [''],
    });
    this.form.get('entry').setValidators([Validators.required, jsonValidator()]);
  }

  ngOnInit(): void {}
  createEntry(entry: string) {
    console.log(entry);
    this.databaseApiService
      .createEntry(JSON.parse(entry), this.name)
      .subscribe(() => this.currentSelectionService.updateCurrentCollection(this.name));
  }
}
