export interface ColumnFilter {
  /**
   * Keys are column names the filters should be applied on.
   * Values are the filters to be applied (OR)
   */
  [columnName: string]: string[];
}

/**
 * Defines the table filter to be used:
 * - ColumnFilter: filters only according to the defined columns.
 * - string: full text filtering.
 * - null: no filtering.
 */
export type TableFilter = ColumnFilter | string | null;

export function isFullTextFilter(filter: TableFilter): filter is string {
  return typeof filter === 'string';
}

export function isColumnFilter(filter: TableFilter): filter is ColumnFilter {
  return typeof filter === 'object';
}
