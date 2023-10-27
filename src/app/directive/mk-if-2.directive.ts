import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[MkIf2]'
})
export class MkIf2Directive {
  
  @Input()
  MkIf2:any;
  
  
  @HostBinding('style.display')
  display = '';

  constructor() {

  }

  ngOnInit(){

  }

  ngOnChanges(){
    if(this.MkIf2){
      this.display = 'block';
    }else{
      this.display = 'none';
    }
  }

}
