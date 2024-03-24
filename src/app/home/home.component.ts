import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import Typewriter from 't-writer.js';
import anime from 'animejs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  images:any=[]
  constructor(private service:ImagesService)
  {
     this.images=service.getImages()
     console.log(this.images)
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



  
}
