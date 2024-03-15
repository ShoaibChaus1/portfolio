import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  images:any=[]
  constructor() { }

  setImages(img:any)
  {
    this.images.push(img);

    }

    getImages()
    {
      return this.images;
    }
}
