import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CommunicationService } from '../../../services/communication/communication.service';
import { Folder } from '../../../model/folder.interface';
@Component({
  selector: 'finder-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  folders$: Observable<Folder[]>;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateComponent>,
    private communicationSerice: CommunicationService
  ) {
    this.folders$ = this.communicationSerice.folders$;
    this.form = this.fb.group({
      fileName: [''],
    });
  }
  ngOnInit(): void {}
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
  choose(folder: Folder) {
    console.log(folder);
  }
}
