import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent {
  private readonly _AuthService=inject(AuthService)
  private readonly _Router=inject(Router)
  step:number=1;
verifyEmail:FormGroup=new FormGroup({
  email:new FormGroup(null,[Validators.required,Validators.email])
})
verifyCode:FormGroup=new FormGroup({
  resetCode:new FormGroup(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)])
})
resetPassword:FormGroup=new FormGroup({
  email:new FormGroup(null,[Validators.required,Validators.email]),
  newPassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]\w{5,}$/)]),
  
})

verifyEmailSubmit():void{
  let emailValue = this.verifyEmail.get('email')?.value
  this.resetPassword.get('email')?.patchValue(emailValue)
  
  this._AuthService.setEmailverify(this.verifyEmail.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.statusmsg==='success'){
        this.step=2;
      }
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
verifyCodeSubmit():void{
  this._AuthService.setCodeverify(this.verifyCode.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.statusmsg==='success'){
        this.step=3;
      }
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
ResetPasswordSubmit():void{
  this._AuthService.setResetPass(this.resetPassword.value).subscribe({
    next:(res)=>{
      console.log(res)
     localStorage.setItem('userToken',res.token);
     this._AuthService.saveUserData()
     this._Router.navigate(['/home'])
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
