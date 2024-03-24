import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  constructor(private el:ElementRef,private rn:Renderer2)
   { 
      
  }

}
