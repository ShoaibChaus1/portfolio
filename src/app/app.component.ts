import { Component } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  images:any=[
    {
      name:'flipkart',
      path:'../assets/images/flipkart.png'
    },
    {
      name:'zomato',
      path:'../assets/images/zomato.png'
    },
    {
      name:'profile',
      path:'../assets/images/profile.jpeg'
    }
  ]
  constructor(private service:ImagesService)
  {
      this.service.setImages(this.images)

  }

  
}

