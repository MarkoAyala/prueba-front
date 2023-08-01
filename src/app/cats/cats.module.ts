import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsService } from './cats.service';
import { FormsModule } from '@angular/forms';
import { CatsRoutingModule } from './cats-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CatsComponent } from './components/cats/cats.component';
import { FormComponent } from './pages/form/form.component';
import { RouterModule } from '@angular/router';
import { ImagenService } from '../images/imagen.service';


@NgModule({
  declarations: [
    HomeComponent,
    CatsComponent,
    FormComponent
  ],
  providers:[CatsService , ImagenService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CatsRoutingModule,
    RouterModule
  ],
})
export class CatsModule { }
