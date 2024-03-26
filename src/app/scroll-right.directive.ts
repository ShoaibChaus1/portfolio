import { Directive, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollRight]'
})
export class ScrollRightDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.el.nativeElement, {
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 80%', // adjust as needed
        end: 'bottom 20%', // adjust as needed
        toggleActions: 'play pause reverse pause',
        scrub:true // adjust as needed
        
      },
      x: 100, // initial position to the right
      opacity: 0, // initial opacity
      duration: 1, // animation duration
      ease: 'power2.out' // adjust the easing function as needed
    });
  }

}
