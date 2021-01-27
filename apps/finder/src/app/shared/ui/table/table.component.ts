import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable } from '@angular/material/table';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { ExpandedDetailDefDirective } from './directives/expanded-detail-def.directive';
const columnFilterKeyword = '[USE_COLUMN_FILTER]';

@Component({
  selector: 'finder-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      transition(':enter', [
        style({ height: '0px', minHeight: '0' }),
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ height: '*' })),
      ]),
      transition(':leave', [animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ height: '0px', minHeight: '0' }))]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements AfterContentInit, OnInit {
  @Input() set columns(v: string[]) {
    this.columnsWithoutExpansionArrow = v;
  }
  get columns() {
    return this.expandedDetailDef
      ? ['expansion-arrow', ...this.columnsWithoutExpansionArrow]
      : this.columnsWithoutExpansionArrow;
  }
  @Input() set data(value: T[] | void) {
    if (!value) {
      this.isLoading = true;
    } else {
      this.isLoading = false;
      this.updateDataSource(value);
    }
    console.log(this.isLoading);
  }

  constructor(private cdr: ChangeDetectorRef) {}
  @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  @ContentChild(ExpandedDetailDefDirective) expandedDetailDef?: ExpandedDetailDefDirective;

  @ViewChild(MatTable, { static: true }) table: MatTable<T>;
  @Output() loadNewData = new EventEmitter<boolean>();
  @Input() highlightProperty = '__highlightPropertyNotSet';
  @Input() highlightAnimatedProperty = '__highlightPropertyNotSet';
  private columnsWithoutExpansionArrow: string[] = [];

  @Input() hasHeader = true;

  @Input() rowHeight?: number;

  @Input() noDataText = 'Keine Daten verfügbar.';

  isLoading = false;
  dataLength: number;

  /**
   * The datasource for the virtual scroller.
   * This holds version of originalData that might me sorted.
   */
  public dataSource?: TableVirtualScrollDataSource<T>;

  public expandedElement: T | null = null;

  private updateDataSource(value: T[]) {
    this.dataSource = new TableVirtualScrollDataSource(value);
    // work-around for this issue:
    // https://github.com/diprokon/ng-table-virtual-scroll/issues/26
    setTimeout(() => window.dispatchEvent(new Event('resize')), 0);
  }

  ngOnInit(): void {
    if (!this.rowHeight) {
      throw new Error(`Please provide rowHeight:
                       <go-table rowHeight="70" ...></go-table>
                                     ^ missing`);
    }
  }
  ngAfterContentInit() {
    this.addProjectedTableDefinitions();
  }

  private addProjectedTableDefinitions() {
    // read in all table definitions projected into ng-container
    // and delegate them to MatTable
    this.columnDefs.forEach((columnDef) => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach((rowDef) => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach((headerRowDef) => this.table.addHeaderRowDef(headerRowDef));
    if (!this.dataSource) {
      this.dataSource = new TableVirtualScrollDataSource();
    }
  }
}
