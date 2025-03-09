import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { Icart } from '../../shared/interterfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe ,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private readonly _CartService=inject(CartService)

  cartDetails:Icart={}as Icart

ngOnInit(): void {
  this.getCartData()
}

getCartData():void{
  this._CartService.getLoggedUserCart().subscribe({
    next:(res)=>{
      console.log(res.data)
    },error:(err)=>{
      console.log(err)
    }
  })
}
removeItme(id:string):void{
  this._CartService.removeSpecifcCartItme(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.cartDetails=res.data
    },
     error:(err)=>{
         console.log(err)
    }
  })
}
updataCount(id:string,count:string):void{
  this._CartService.updataProductToCart(id, count).subscribe({
    next:(res)=>{
      console.log(res.data)
      this.cartDetails=res.data
    },error:(err)=>{
      console.log(err)
    }})
}
clearItme():void{
this._CartService.clearCart().subscribe({
  next:(res)=>{
    console.log(res)
    if(res.massage==='success'){
      this.cartDetails={}as Icart
    }
  },error:(err)=>{
    console.log(err)
  }
})
}
}
