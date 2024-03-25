import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  images:any=[]

  icons:any=[]
  constructor() { }

  setImages(img:any)
  {
    this.images.push(img);

    }

    getImages()
    {
      return this.images;
    }

    setIcons(icon:any)
    {
     this.icons.push(icon)
    }

    getIcon()
    {
      return this.icons
    }
}
