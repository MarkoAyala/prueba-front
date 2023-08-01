import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from './Models/cats.model';
import { createCat } from './Models/cats.model';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  public data!:Cat;
  public update!:createCat;
  constructor(private http:HttpClient) {}

  getCats(){
    return this.http.get<Cat[]>('http://localhost:3000/cats');
  }

 async delete(id:string){
    return this.http.delete(`http://localhost:3000/cats/${id}`).subscribe((data)=> console.log('Borrado'));
  }

  async create(info:createCat){
    return this.http.post("http://localhost:3000/cats" , info).subscribe((data)=> console.log('Creado'));
  }

  async getOne(id: string): Promise<Cat> {
    const data: Cat|undefined = await this.http.get<Cat>(`http://localhost:3000/cats/${id}`).toPromise();
    if(data != undefined){
      this.data = data;
    }
    return this.data;
  }

  async updateOne(id: string , datos:createCat) {
    const data: createCat|undefined = await this.http.put<createCat>(`http://localhost:3000/cats/${id}`, datos).toPromise();
    if(data !=undefined){
      this.update = data;
    }
    return this.update;
  }


}
