import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import { Iproguct } from '../../../../shared/interterfaces/iproguct';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  imports: [RouterLink,SearchPipe,FormsModule],
templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
 private readonly productsService =inject(ProductsService)
 private readonly _CartService =inject(CartService)


  products:Iproguct[]=[];
  term:string='';

  ngOnInit(): void {
    this.getProductData()
  }
  getProductData(){
    this.productsService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.products=res.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  addToCart(id:string):void{
this._CartService.addProductToCart(id).subscribe({
  next:(res)=>{
    console.log(res)
  },
  error:(err)=>{
    console.log(err)
  }
})
  }

  addToWishList(id:string):void{
this._CartService.addProductToCart(id).subscribe({
  next:(res)=>{
    console.log(res)
  },
  error:(err)=>{
    console.log(err)
  }
})
  }
}
