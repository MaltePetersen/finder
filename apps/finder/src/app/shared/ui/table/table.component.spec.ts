import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { render, screen } from '@testing-library/angular';
import { TableModule } from './table.module';

@Component({
  template: `<finder-table rowHeight="50" noDataText="no data test">
    <ng-container matColumnDef="testColumn"> </ng-container>
    <tr *matRowDef="let row; columns: columns" mat-row></tr>
  </finder-table>`,
})
class TestHostComponent {}

describe('TableComponent', () => {
  it('should render noData Text', async () => {
    await render(TestHostComponent, {
      imports: [NoopAnimationsModule, TableModule],
    });

    expect(screen.findByText('no data test')).toBeTruthy();
  });
});
