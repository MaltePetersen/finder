import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[finderExpandedDetailDef]',
})
export class ExpandedDetailDefDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
