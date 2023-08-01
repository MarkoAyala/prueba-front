import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { ImagesRoutingModule } from './images-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { ImagenService } from './imagen.service';


@NgModule({
  declarations: [
    HomeComponent,
    ImagesComponent
  ],
  providers:[ImagenService],
  imports: [
    CommonModule,
    HttpClientModule,
    ImagesRoutingModule
  ],
})
export class ImagesModule { }
