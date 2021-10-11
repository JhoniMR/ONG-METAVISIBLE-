import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.page.html',
  styleUrls: ['./beneficios.page.scss'],
})
export class BeneficiosPage implements OnInit {

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

   private path ='beneficios'

  getMostrar( path: string){
    this.authService.getMostrar(this.path).subscribe(data =>{
      this.informacion = [];
        data.forEach((element:any) =>{
          this.informacion.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });

        console.log(this.informacion);

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