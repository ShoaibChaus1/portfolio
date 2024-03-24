import { AfterViewInit, Component } from '@angular/core';
import { ImagesService } from '../images.service';
import anime from 'animejs'
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements AfterViewInit {

  images:any[]=[]
   
  title1=false
  title2=false
  title3=false
  title4=false
  constructor(private imgService:ImagesService)
  {
    this.images= imgService.getImages()
  }

  ngAfterViewInit(): void {
    anime({
      targets: '',
      scaleX: -1, // Flip horizontally
      // scaleY: -1, // Uncomment to flip vertically
      easing: 'easeInOutQuad',
      duration: 1000, // Duration of the animation
      loop: false // If you want the animation to loop
    });
  }

}
