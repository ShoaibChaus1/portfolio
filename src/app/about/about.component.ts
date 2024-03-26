import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  images:any[]=[]

  constructor(private imgService:ImagesService)
  {
     this.images=imgService.getImages()
  }

  ngOnInit(): void {
    
  }

}
