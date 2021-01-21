import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Folder } from '../../../model/folder.interface';
import { ApiService } from '../../../services/api/api-service.service';
import { FileNodeService } from '../../../services/filenode/filenode.service';
@Component({
  selector: 'finder-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  folders$: Observable<Folder[]>;
  disabled = true;
  currentFolder: Folder;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateComponent>,
    private fileNodeService: FileNodeService,
    private apiService: ApiService
  ) {
    this.folders$ = this.fileNodeService.folders$;
    this.form = this.fb.group({
      radio: [{ value: 'folder', disabled: false }],
      fileName: [''],
    });
    this.form.get('fileName').valueChanges.subscribe((value) => (this.disabled = value === ''));
  }
  ngOnInit(): void {}
  create() {
    if (this.form.get('radio').value === 'file') {
      this.apiService
        .createFile({ name: this.form.get('fileName').value, path: this.currentFolder.path })
        .subscribe((data) => console.log(data));
    } else {
      const path = `${this.currentFolder.path}/${this.form.get('fileName').value}`;
      console.log(path);
      this.apiService.createDirectory({ path: path }).subscribe((data) => console.log(data));
    }
    this.fileNodeService.load();
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
  updateCurrentFolder(folder: Folder) {
    this.currentFolder = folder;
  }
}
