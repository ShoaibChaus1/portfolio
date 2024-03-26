import { Directive, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appAppearTop]'
})
export class AppearTopDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.el.nativeElement, {
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 80%', // adjust as needed
        end: 'bottom 20%', // adjust as needed
        toggleActions: 'play none none none' // adjust as needed
      },
      y: -100, // initial position above the viewport
      opacity: 0, // initial opacity
      duration: 1, // animation duration
      ease: 'power2.out' // adjust the easing function as needed
    });
  }

}
