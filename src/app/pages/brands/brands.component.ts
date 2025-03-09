import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands/brands.service';
import { Ibrands } from '../../shared/interterfaces/ibrands';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{
 private readonly _BrandsService =inject(BrandsService)


  brands:Ibrands[]=[];
  term:string='';

  ngOnInit(): void {
    this.getBrandsData()
  }
  getBrandsData(){
    this._BrandsService.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.brands=res.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
