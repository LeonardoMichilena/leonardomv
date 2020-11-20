import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['coding.jpg','ibarra.jpg','barcelona.jpg','berlin.jpg','limitless.jpg'];
  headlines = ["Welcome to Leonardo Michilena Valencia's website!",
  "Born in Ibarra, Ecuador...",
  "...grew up in Barcelona, Spain...",
  "...and exploring Berlin since 2015",
  "If you want to know more about Leonardo just click here!"];

  img;
  imageCache = [];
  currentImage = 0;
  endSlide = false;
 
  constructor(public router: Router) {}
  
  ngOnInit(): void {

    for (let i of this.images){
      this.img = document.createElement("img");
      this.img.src = "./assets/img/" + i;
      this.imageCache.push(this.img);
      console.log(this.imageCache);
    }
    setInterval(() => {
      if(this.currentImage < this.images.length - 1) {
        this.currentImage++;
      }
    }, 8000); 
    
  

  }
nextSlide(){
  
  if(this.currentImage == this.images.length -1) {
    console.log(this.router.getCurrentNavigation);
    this.router.navigateByUrl("/curriculum");
  }
  
}
    /* window.onscroll = () => {
      console.log(window.scrollY);
      if(window.scrollY > 300) {
        window.location.href='#id2';
      }
    }; */


}
