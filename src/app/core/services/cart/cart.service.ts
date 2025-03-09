import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
   myToken:string=JSON.stringify(localStorage.getItem('userToken'))

  addProductToCart(id:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
      {
        "productId": id
      },
      {
        headers:{
        token:this.myToken
      }
      }

    )}
    removeSpecifcCartItme(id:string,):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      
      {
        headers:{
        token:this.myToken
      }
      }

    )}
    updataProductToCart(id:string,count:string):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        "productId": count
      },
      {
        headers:{
        token:this.myToken
      }
      }

    )}
  getLoggedUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
     
      {
        headers:{
        token:this.myToken
         }
      }

    )}
    clearCart():Observable<any>{
      return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart` ,
        {
          headers:{
            token:this.myToken
          }
        }
      )
    }
}
