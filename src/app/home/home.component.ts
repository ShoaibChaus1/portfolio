import { Component } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images:any=[]
  constructor(private service:ImagesService)
  {
     this.images=service.getImages()
     console.log(this.images)
  }

}
