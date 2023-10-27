import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MkIf]'
})
export class MkIfDirective {

  @Input() set MkIf(condition: any){
    console.log('This function is called whenever input is changed.');
    if(condition){
      this.display = 'block';
    }else{
      this.display = 'none';
    }
  }
  
  
  @HostBinding('style.display')
  display = '';

  constructor(private elementRef : ElementRef,
    private renderer : Renderer2) {

  }

  ngOnInit(){

  }

}
