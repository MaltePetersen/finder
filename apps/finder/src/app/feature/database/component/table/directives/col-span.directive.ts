import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Directive({
  selector: 'td[goColSpan]',
})
export class ColSpanDirective {
  @Input()
  private readonly goColSpan: number = 1;
  @HostBinding('style.display')
  public get display() {
    return this.goColSpan === 0 ? 'none' : 'table-cell';
  }

  @HostBinding('attr.colspan')
  public get colspan() {
    return this.goColSpan;
  }
}
