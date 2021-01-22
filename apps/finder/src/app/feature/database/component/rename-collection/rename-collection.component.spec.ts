import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameCollectionComponent } from './rename-collection.component';

describe('RenameCollectionComponent', () => {
  let component: RenameCollectionComponent;
  let fixture: ComponentFixture<RenameCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenameCollectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
