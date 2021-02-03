import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';
@Directive({
  selector: '[d-grid]'
})
export class CssGridDirective {
  @HostBinding('style.display') display = 'grid';
  @Input() areas: string[][] | null = null;
  @Input() columns: string[] | null = null;
  @Input() rows: string[] | null = null;
  @HostBinding('style.grid-template-columns')
  get gridTemplateColumns() {
    return this.columns ? this.columns.join(' ') : null;
  }
  @HostBinding('style.grid-template-rows')
  get gridTemplateRows() {
    return this.rows ? this.rows.join(' ') : null;
  }
  @HostBinding('style.grid-template-areas')
  get gridTemplateAreas() {
    return this.areas ? this.areas.map(rows => `"${rows.join(' ')}"`).join(' ') : null;
  }
  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'height', '100vh');
  }
}