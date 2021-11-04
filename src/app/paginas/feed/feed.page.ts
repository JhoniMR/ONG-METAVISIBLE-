import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  informacion: any[] = [];

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

  private path ='noticias';

  getMostrar( path: string){
    this.authService.getMostrar(this.path).subscribe(data =>{
      this.informacion = [];
        data.forEach((element:any) =>{
          this.informacion.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
    });
  }

}
