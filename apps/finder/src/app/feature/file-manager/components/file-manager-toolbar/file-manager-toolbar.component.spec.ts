import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagerToolbarComponent } from './file-manager-toolbar.component';

describe('FileManagerToolbarComponent', () => {
  let component: FileManagerToolbarComponent;
  let fixture: ComponentFixture<FileManagerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileManagerToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
