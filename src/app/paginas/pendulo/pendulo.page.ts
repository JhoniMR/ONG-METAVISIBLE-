import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendulo',
  templateUrl: './pendulo.page.html',
  styleUrls: ['./pendulo.page.scss'],
})
export class PenduloPage implements OnInit {

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
