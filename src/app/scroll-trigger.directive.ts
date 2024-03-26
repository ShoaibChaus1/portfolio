
import { Directive, ElementRef, HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollTrigger]'
})
export class ScrollTriggerDirective {


  constructor(private el: ElementRef) { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.el.nativeElement, {
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 80%', // adjust as needed
        end: 'bottom 20%', // adjust as needed
        toggleActions: 'play pause reverse pause' ,
        scrub:true// adjust as needed
      },
      x: -100, // initial position
      opacity: 0, // initial opacity
      duration: 1 // animation duration
    });
  }


 

}
