import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Icategory } from '../../shared/interterfaces/icategory';

@Component({
  selector: 'app-categories',
  imports: [],
templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
 private readonly _CategoriesService =inject(CategoriesService)

 
   categorice:Icategory[]=[];
   
 
   ngOnInit(): void {
     this.getAllCategories()
   }
   getAllCategories(){
     this._CategoriesService.getAllCategories().subscribe({
       next:(res)=>{
         console.log(res.data);
         this.categorice=res.data;
       },
       error:(err)=>{
         console.log(err)
       }
     })
   }
  
 

 
}
