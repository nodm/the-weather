import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
  @Input('appPlaceholder') placeholderLength: number;
  @Input() placeholderColor = '#ddd';

  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'inline-block';
    el.nativeElement.style.borderRadius = '10px';
    el.nativeElement.style.backgroundColor = this.placeholderColor;
    el.nativeElement.style.color = 'transparent';
    el.nativeElement.innerHTML = '*'.repeat(this.placeholderLength);
    console.log(this.placeholderLength);
  }
}
