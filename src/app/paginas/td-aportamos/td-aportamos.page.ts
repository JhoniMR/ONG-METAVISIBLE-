import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-aportamos',
  templateUrl: './td-aportamos.page.html',
  styleUrls: ['./td-aportamos.page.scss'],
})
export class TdAportamosPage implements OnInit {

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
