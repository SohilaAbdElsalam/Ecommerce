import { Component, inject, OnDestroy } from '@angular/core';
import{AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from'@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent implements OnDestroy  {
  private readonly  _AuthService=inject(AuthService)
  private readonly  _FormBuilder=inject(FormBuilder)
  apiError!:string
  subscription:any
  
registerForm : FormGroup = this._FormBuilder.group({
  name: [null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  password: [null,[Validators.required,Validators.pattern(/^[A-Z]\w{5,}$/)]],
  rePassword:[null],
  email:[null,[Validators.required,Validators.email]],
  phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],

}, {validators:this.validateRePassword});

_authService= inject(AuthService)
_router=inject(Router)
register(){
 
  console.log(this.registerForm);
  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched()
  }else{
    this.apiError=''
    this._authService.registerUser(this.registerForm.value).subscribe({
      next:(res)=>{
         console.log(res)
         this._router.navigate(['/auth/login'])
      },
      error:(err)=>{
        console.log(err)
        this.apiError=err.error.message
        
      },
      complete:()=>{

      },
    })
  }
}
validateRePassword(form:AbstractControl){
  const password=form.get('password')?.value
  const rePassword=form.get('rePassword')?.value
  if(password==rePassword){
    return null
  }else{
    return{misMatch:true}
  }
}
ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}


