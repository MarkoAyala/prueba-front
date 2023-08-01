import { Component , Input } from '@angular/core';
import { Cat } from '../../Models/cats.model';
import { CatsService } from '../../cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {
  @Input('cats') cats:Cat[] = [];
  @Input('texto') texto:string = '';

  constructor(private catsService: CatsService){}

  imgDefault(index:number){
    this.cats[index] = {
      ...this.cats[index],
      img:'../../../../assets/Images/default.jpg'
    }
  }
  async deleteCat(id:string , index:number){
    let delte = await this.catsService.delete(id);
    this.cats = this.cats.filter((element , i) => i != index);
    if(this.cats.length == 0){
      this.texto = "Borraste todos los gatitos 😥";
    }
    alert('Se ha borrado correctamente');
  }
}
