import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-belleza',
  templateUrl: './belleza.page.html',
  styleUrls: ['./belleza.page.scss'],
})
export class BellezaPage implements OnInit {

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
