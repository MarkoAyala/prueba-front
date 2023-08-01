import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageFavorite } from '../../Models/ImageFavorite.model';
import { createCat } from '../../Models/cats.model';
import { Router } from '@angular/router';
import { ImagenService } from 'src/app/images/imagen.service';
import { CatsService } from '../../cats.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public edit!:number;
  public cats:ImageFavorite[] = [];
  public img:string = '../../../../assets/Images/default.jpg';
  public form:createCat = {
    name:'',
    race:'',
    age:0,
    img:'',
  }

  constructor(private activatedRoute:ActivatedRoute , private imagesService : ImagenService , private catService : CatsService , private router:Router){}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.edit = params['edit'];
      console.log(this.edit);

    this.imagesService.getFavorites().subscribe((data)=>{
      this.cats = data;
    })
    });
  }

  elegirImagen(url:string){
    this.img = url;
  }

  isFormNotEmpty(): boolean {
    const values = Object.values(this.form);
    console.log(values.some(value => value !== '' && value !== 0))
    return values.every(value => value !== '' && value !== 0 && value != '../../../../assets/Images/default.jpg');
  }

  guardar(){
    this.form = {
      ...this.form,
      img:this.img
    }
    if(this.isFormNotEmpty()){
      this.catService.create(this.form).finally(()=>{
        alert('Creado con exito');
        this.router.navigate(['/cats']);
      })
      console.log("entre",this.form);
    }else{
      alert('Rellene todos los campos');
    }
  }

}
