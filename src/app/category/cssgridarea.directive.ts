import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
@Directive({
  selector: '[d-grid-area]'
})
export class CssGridAreaDirective {
  @HostBinding('style.grid-area')
  @Input('d-grid-area') area: string;
  @HostListener('mouseover')
  onMouseOver() {
    this.changeBgColor('lightgrey');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeBgColor();
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  public changeBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
  public removeBgColor() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}