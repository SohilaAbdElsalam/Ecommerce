import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router, RouterLink,  } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly  _AuthService=inject(AuthService)
  private readonly  _FormBuilder=inject(FormBuilder)
  apiError!:string
  subscription:any
  msgSuccess!:boolean

  loginForm : FormGroup = this._FormBuilder.group({
    password: [null,[Validators.required,Validators.pattern(/^[A-Z]\w{5,}$/)]],
    email:[null,[Validators.required,Validators.email]],
  
  });




_authService= inject(AuthService)
_router=inject(Router)
login(){
 
  console.log(this.loginForm);
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched()
  }else{
    this.apiError=''
    this._authService.loinUser(this.loginForm.value).subscribe({
      next:(res)=>{
         console.log(res)
         if(res.message=='success'){
          this.msgSuccess=true
          setTimeout(()=>{
            localStorage.setItem('userToken',res.token)
            this._AuthService.saveUserData()

            this._router.navigate(['/home'])

          },1000);
         }
         

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
}
