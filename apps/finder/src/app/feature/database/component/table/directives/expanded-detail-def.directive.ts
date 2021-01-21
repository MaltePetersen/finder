import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[goExpandedDetailDef]',
})
export class ExpandedDetailDefDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
