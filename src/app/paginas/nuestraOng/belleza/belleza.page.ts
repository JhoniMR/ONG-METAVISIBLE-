import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-belleza',
  templateUrl: './belleza.page.html',
  styleUrls: ['./belleza.page.scss'],
})
export class BellezaPage implements OnInit {

  informacion: any[]=[];
  isLogged = false;

  constructor(private authService: AuthService) { }

  option= {
    slidesPreView: 1.5,
    centeredSlides: true,
    loop: true,
    spacaBetween: 10, 
    autoplay:true,
  } 

  ngOnInit() {
    this.getMostrar(this.path);
  }

  private path ='nuestraOng'

  getMostrar( path: string){
    this.authService.getMostrar(this.path).subscribe(data =>{
      this.informacion = [];
        data.forEach((element:any) =>{
          this.informacion.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });

        if(this.informacion === null){
          this.isLogged = false;
          return
        }else{
          this.isLogged = true;
          return
        }  
    });
  }

}