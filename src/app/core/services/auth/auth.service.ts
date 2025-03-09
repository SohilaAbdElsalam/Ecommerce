import { Injectable, inject,  } from '@angular/core';
import { HttpClient ,} from '@angular/common/http';
import { AuthUser, loginUser, } from '../../../shared/interterfaces/auth-user';
import { Observable ,} from 'rxjs';
import { environment ,} from '../../environments/environment';
import { jwtDecode ,} from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private readonly  _httpClient=inject (HttpClient);
 private readonly _Router=inject(Router);
  userData:any=null
  constructor() { }
  registerUser(userInfo:AuthUser):Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/api/v1/auth/signup`,userInfo)
  }
  loinUser(userInfo:loginUser):Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/api/v1/auth/signin`,userInfo)
  }
  saveUserData():void{
    if(localStorage.getItem('userToken')!==null){
     this.userData =  jwtDecode(localStorage.getItem('userToken') !)
    }
  }
  logOut():void{
    localStorage.removeItem('userToken');
    this.userData=null;
    this._Router.navigate(['/login'])
  }

  setEmailverify(data:object):Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`,data)
  }
  setCodeverify(data:object):Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`,data)
  }
  setResetPass(data:object):Observable<any>{
    return this._httpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword`,data)
  }
}
