import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import aos from 'aos';

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
      aos.init()
  }

}
