import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

   constructor(private _HttpClient:HttpClient) { }
    myToken:string=JSON.stringify(localStorage.getItem('userToken'))
 
   addProductToWishList(id:string):Observable<any>{
     return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',
       {
         "productId": id
       },
       {
         headers:{
         token:this.myToken
       }
       }
 
     )}
     removeSpecifcWishListItme(id:string,):Observable<any>{
     return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
       
       {
         headers:{
         token:this.myToken
       }
       }
 
     )}
     updataProductToWishList(id:string,count:string):Observable<any>{
     return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/wishList/${id}`,
       {
         "productId": count
       },
       {
         headers:{
         token:this.myToken
       }
       }
 
     )}
   getLoggedUserWishList():Observable<any>{
     return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist',
      
       {
         headers:{
         token:this.myToken
          }
       }
 
     )}
}
