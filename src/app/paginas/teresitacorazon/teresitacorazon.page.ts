import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service'
@Component({
  selector: 'app-teresitacorazon',
  templateUrl: './teresitacorazon.page.html',
  styleUrls: ['./teresitacorazon.page.scss'],
})
export class TeresitacorazonPage implements OnInit {

  constructor(private authService: AuthService) { }


  informacion: any[] = [];
  isLogged = false;

  ngOnInit() {
    this.getMostrar(this.path);
  }

  path = 'nuestraOng'

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

  option= {
    slidesPreView: 1.5,
    centeredSlides: true,
    loop: true,
    spacaBetween: 10, 
    autoplay:true,
  }
  


}
