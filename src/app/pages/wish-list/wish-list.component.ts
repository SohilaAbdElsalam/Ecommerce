import { Component, inject, OnInit } from '@angular/core';
import { WishListService } from '../../core/services/WishList/wish-list.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-wish-list',
  imports: [CurrencyPipe],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
 private readonly _WishListService=inject(WishListService)

  wishListDetails:object={}as object

ngOnInit(): void {
  this.getCartData()
}

getCartData():void{
  this._WishListService.getLoggedUserWishList().subscribe({
    next:(res)=>{
      console.log(res.data)
    },error:(err)=>{
      console.log(err)
    }
  })
}
removeItme(id:string):void{
  this._WishListService.removeSpecifcWishListItme(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.wishListDetails=res.data
    },
     error:(err)=>{
         console.log(err)
    }
  })
}
updataCount():void{
  this._WishListService.updataProductToWishList().subscribe({
    next:(res)=>{
      console.log(res.data)
    },error:(err)=>{
      console.log(err)
    }})
}
}


