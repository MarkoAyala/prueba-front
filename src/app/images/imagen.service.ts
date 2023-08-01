import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './Models/image.model';
import { ImageFavorite } from '../cats/Models/ImageFavorite.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http:HttpClient) {}

  getImages(){
    return this.http.get<Image[]>('http://localhost:3000/images');
  }

  addFavorite(id:string){
    return this.http.post(`http://localhost:3000/images/${id}`,null)
  }

  getFavorites(){
    return this.http.get<ImageFavorite[]>('http://localhost:3000/images/favorites');
  }
}
