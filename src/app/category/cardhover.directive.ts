import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector:"[ccCardHover]"
})
class CardHoverDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = "gray";
        //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }
}