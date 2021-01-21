import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderchoserComponent } from './folderchoser.component';

describe('FolderchoserComponent', () => {
  let component: FolderchoserComponent;
  let fixture: ComponentFixture<FolderchoserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolderchoserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderchoserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
