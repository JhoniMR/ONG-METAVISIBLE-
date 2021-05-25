import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.page.html',
  styleUrls: ['./salud.page.scss'],
})
export class SaludPage implements OnInit {

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
