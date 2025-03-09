import { Component, inject, Inject, OnInit } from '@angular/core';
import { ProductComponent } from "./comopnents/product/product.component";
import { CategoriesComponent } from "../categories/categories.component";
import { MainSliderComponent } from "./comopnents/main-slider/main-slider.component";

@Component({
  selector: 'app-home',
  imports: [ProductComponent, CategoriesComponent, MainSliderComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
