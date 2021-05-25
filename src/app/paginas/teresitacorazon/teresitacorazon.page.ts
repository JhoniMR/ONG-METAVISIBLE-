import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teresitacorazon',
  templateUrl: './teresitacorazon.page.html',
  styleUrls: ['./teresitacorazon.page.scss'],
})
export class TeresitacorazonPage implements OnInit {

  constructor() { }

  option= {
    slidesPreView: 1.5,
    centeredSlides: true,
    loop: true,
    spacaBetween: 10, 
    autoplay:true,
  }
  
  ngOnInit() {
  }

}
