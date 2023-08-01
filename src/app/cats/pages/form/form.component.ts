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
  public idCat!:string;
  public cats:ImageFavorite[] = [];
  public img:string = '../../../../assets/Images/default.jpg';
  public form:createCat = {
    name:'',
    race:'',
    age:0,
    img:'',
  }

  constructor(private activatedRoute:ActivatedRoute , private imagesService : ImagenService , private catService : CatsService , private router:Router){}
   async ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.edit = params['edit'];
      this.idCat = params['id'];
    });
    this.imagesService.getFavorites().subscribe((data)=>{
      this.cats = data;
    })
    if(this.idCat){
      let info = await this.catService.getOne(this.idCat);
      this.form = info;
    }
  }

  elegirImagen(url:string){
    this.img = url;
    this.form = {
      ...this.form,
      img:url
    }
  }

  isFormNotEmpty(): boolean {
    const values = Object.values(this.form);
    return values.every(value => value !== ''  && value != '../../../../assets/Images/default.jpg');
  }

  guardar(){
    if(this.edit != 1){
      this.form = {
        ...this.form,
        img:this.img
      }
    }
    if(this.isFormNotEmpty()){
      if(this.edit != 1){
        this.catService.create(this.form).finally(()=>{
          alert('Creado con exito');
          this.router.navigate(['/cats']);
        })
      }else{
        this.catService.updateOne(this.idCat , {
          name:this.form.name,
          age:this.form.age,
          race:this.form.race,
          img:this.form.img
        })
        alert('Editado con exito');
        this.router.navigate(['/cats']);
      }
    }else{
      alert('Rellene todos los campos');
    }
  }

}
