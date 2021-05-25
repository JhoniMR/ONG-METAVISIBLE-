import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noah-h',
  templateUrl: './noah-h.page.html',
  styleUrls: ['./noah-h.page.scss'],
})
export class NoahHPage implements OnInit {

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
