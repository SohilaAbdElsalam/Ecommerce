import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor( private httpClinet:HttpClient) { }
  myToken:any=localStorage.getItem('uesrToken');
  checkoutPayment(id:string,data:object):Observable<any>{
    return this.httpClinet.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        "shippingAddress":data
    },
    {
      headers:{
        token:this.myToken
      }
    }
    )
  }
}
