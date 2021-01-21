import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCollectionsComponent } from './show-collections.component';

describe('ShowCollectionsComponent', () => {
  let component: ShowCollectionsComponent;
  let fixture: ComponentFixture<ShowCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCollectionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
