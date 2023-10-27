import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTwoInputDirective]'
})
export class TwoInputDirectiveDirective {

  @Input()
  appTwoInputDirective='';

  @Input()
  secondInput='';

  @HostBinding('style.backgroundColor')
  bgColor='';

  constructor(private el: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    // this.el.nativeElement.style.backgroundColor = 'Yellow';
    this.bgColor= this.appTwoInputDirective;

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor= this.secondInput;
  }

}
