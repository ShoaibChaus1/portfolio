import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import Typewriter from 't-writer.js';

import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import AOS from 'aos';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  @ViewChild('slide') slide!: ElementRef;
  images:any=[]
  slides



  constructor(private service:ImagesService)
  {
    AOS.init()
     this.images=service.getImages()
     this.slides=service.getIcon()
     console.log(this.images)
     console.log(this.slides)
     
  }

  ngAfterViewInit(): void {
   
       this.animateSlide()
   
  }

  ngOnInit(): void {

   
    
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true, 
      typeColor: 'red' ,
       suffle:'true'
    })
    
    writer
      .strings(
        400,
        "Java Full Stack Developer",
        "Java Developer", 
        "Angular Developer",
        "BackEnd Developer",
        "FrontEnd Developer"
      )
      .start()

      
  }

  animateSlide() {
    const slides = this.carouselContainer.nativeElement.querySelectorAll('.slide');
    const duration = 1; // Animation duration in seconds
  
    gsap.set(slides, { x: '100%' }); // Initial position of slides
  
    slides.forEach((slide:any, index:any) => {
      gsap.to(slide, {
        x: 0,
        duration: duration,
        delay: index * 0.5, // Delay each slide's animation
        ease: 'power2.inOut', // Easing function
        onComplete: () => {
          if (index === slides.length - 1) {
            // All slides have completed animation, trigger the loop
            this.loopAnimation(slides, duration);
          }
        }
      });
    });
  }
  
  loopAnimation(slides:any, duration:any) {
    // Move the last slide to the beginning
    gsap.set(slides[slides.length - 1], { x: '-100%' });
    
    // Animate the slides in a loop
    gsap.to(slides, {
      x: '100%',
      duration: duration,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(slides, { x: '100%' }); // Reset positions
        this.animateSlide(); // Restart the animation loop
      }
    });
  }
  
  



 



  
}
