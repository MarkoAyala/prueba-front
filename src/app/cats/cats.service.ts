import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createCat } from './Models/cats.model';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http:HttpClient) {}

  getCats(){
    return this.http.get<any>('http://localhost:3000/cats');
  }

 async delete(id:string){
    return this.http.delete(`http://localhost:3000/cats/${id}`).subscribe((data)=> console.log('Borrado'));
  }

  async create(info:createCat){
    return this.http.post("http://localhost:3000/cats" , info).subscribe((data)=> console.log('Creado'));
  }
}
