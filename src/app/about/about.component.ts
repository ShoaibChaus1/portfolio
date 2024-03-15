import { Component } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  images:any[]=[]

  constructor(private imgService:ImagesService)
  {
     this.images=imgService.getImages()
  }

}
