import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBody]'
})
export class BodyDirective {

  constructor() { 
  	
   }

   @HostBinding('class.redte') isHovered = false;

}
