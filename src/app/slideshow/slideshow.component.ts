import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['coding.jpg','ibarra.jpg','barcelona.jpg','london.jpg','berlin.jpg','limitless.jpg'];
  headlines = ["I am Leonardo Michilena Valencia, welcome to my website!",
  "I was born in Ibarra, a small and beautiful city in Ecuador",
  "As a child I moved to Spain with my mother, to live in the amazing Barcelona","In 2012, I spent a year abroad learning English in London",
  "Finally in 2015, I moved to Germany, to learn a new language and discover Berlin!",
  "If you want to know more about me just click anywhere!"];

  img;
  imageCache = [];
  currentImage = 0;
 
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
next(){
  
}
    /* window.onscroll = () => {
      console.log(window.scrollY);
      if(window.scrollY > 300) {
        window.location.href='#id2';
      }
    }; */


}
