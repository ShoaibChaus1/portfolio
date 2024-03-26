import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
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

  icons:any=[
   
    {
      name:'Angular',
      path:'../assets/LanIcons/icons8-angular.svg'
    },
    {
      name:'Bootstrap',
      path:'../assets/LanIcons/icons8-bootstrap.svg'
    },
    {
      name:'css',
      path:'../assets/LanIcons/icons8-css.svg'
    },
    {
      name:'html',
      path:'../assets/LanIcons/icons8-html.svg'
    },
    {
      name:'java',
      path:'../assets/LanIcons/icons8-java (1).svg'
    },
    {
      name:'js',
      path:'../assets/LanIcons/icons8-js.svg'
    },
    {
      name:'oracle',
      path:'../assets/LanIcons/icons8-oracle.svg'
    }
    ,
    {
      name:'selenium',
      path:'../assets/LanIcons/icons8-selenium.svg'
    },
    {
      name:'springBoot1',
      path:'../assets/LanIcons/icons8-spring-boot (1).svg'
    }
    
  ]
  constructor(private service:ImagesService,private elementRef:ElementRef)
  {
      this.service.setImages(this.images)
      this.service.setIcons(this.icons)

  }

  scrollTo(section: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + section);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
  }

  


