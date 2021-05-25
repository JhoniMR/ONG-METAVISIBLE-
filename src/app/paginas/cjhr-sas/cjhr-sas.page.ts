import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cjhr-sas',
  templateUrl: './cjhr-sas.page.html',
  styleUrls: ['./cjhr-sas.page.scss'],
})
export class CjhrSasPage implements OnInit {

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
