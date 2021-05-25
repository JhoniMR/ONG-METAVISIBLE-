import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casai',
  templateUrl: './casai.page.html',
  styleUrls: ['./casai.page.scss'],
})
export class CasaiPage implements OnInit {

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
