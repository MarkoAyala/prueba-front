import { Component } from '@angular/core';
import { CatsService } from '../../cats.service';
import { Cat } from '../../Models/cats.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public cats:Cat[] = [];
  public texto:string = 'Cargando...';
  constructor(private catsService: CatsService ){}

  ngOnInit(){
    this.catsService.getCats()
    .subscribe((data)=>{
      this.cats = data;
      if(data.length == 0){
        this.texto = 'No hay gatos creados 😥';
      }
    })
  }
}
