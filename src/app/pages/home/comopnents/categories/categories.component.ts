import { Component, OnInit, inject } from '@angular/core';
import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { Icategory } from '../../../../shared/interterfaces/icategory';
import { OwlOptions } from './../../../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { subscribe } from 'diagnostics_channel';
@Component({
  selector: 'app-categories',
  imports: [CarouselModule],
templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{
  categoriesService=inject(CategoriesService)
  category !:Icategory[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.getCategoriesData()
  }
  getCategoriesData(){
    //this.categoriesService.getAllCategories().subscribe({
      //next:(res)=>{
      //  console.log(res.data);
     //   this.category=res.data;
      //},
      //error:(err)=>{
      //  console.log(err)
      }
    //}) 
 // }

}
