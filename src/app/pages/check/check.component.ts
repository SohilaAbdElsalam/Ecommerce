import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { CheckOutService } from '../../core/services/checkOut/check-out.service';

@Component({
  selector: 'app-check',
  imports: [],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss'
})
export class CheckComponent implements OnInit {
  private readonly _FormBuilder=inject(FormBuilder)
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _CheckOutService=inject(CheckOutService)
checkOutForm!: FormGroup;
cartId:string="";
ngOnInit(): void {
  this.initForm();
  this.getCartId()
 }
 initForm():void{
  this.checkOutForm=this._FormBuilder.group({
    details:[null,[Validators.required]],
    phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city:[null,[Validators.required]],
   
  })
 }
 getCartId():void{
  this._ActivatedRoute.paramMap.subscribe({
    next:(param)=>{
      this.cartId=   param.get('id')!
    }
  })
 }
  submitForm(): void{

this._CheckOutService.checkoutPayment(this.cartId,this.checkOutForm.value).subscribe({
  next:(res)=>{
    console.log(res)
    if(res.status==='success'){
      open(res.session.url,'_self')
    }
  },error:(err)=>{
    console.log(err)
  }
})
  }

}
