import { Component} from '@angular/core';
import { ImagenService } from '../../imagen.service';
import { Image } from '../../Models/image.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  public images:Image[] = [];
  constructor(private imagenService: ImagenService ){}

  ngOnInit(){
    this.imagenService.getImages()
    .subscribe((data)=>{
      this.images = data;
    })
  }

  addFavorite(id:string , index:number){
    this.imagenService.addFavorite(id).subscribe((data)=>{
      this.images[index] = {
        ...this.images[index],
        agregado:true
      };
    })
  }
}
