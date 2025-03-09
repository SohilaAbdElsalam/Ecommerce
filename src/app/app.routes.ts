import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"",
        component:AuthLayoutComponent,canActivate:[logedGuard],
        children:[
        {path:'login',loadComponent:()=>import('./pages/login/login.component').then((c)=>c.LoginComponent),title:'login' },
        {path:'register',loadComponent:()=>import('./pages/register/register.component').then((c)=>c.RegisterComponent),title:'register'},
        {path:'forgotpassword',loadComponent:()=>import('./pages/forgotpassword/forgotpassword.component').then((c)=>c.ForgotpasswordComponent),title:'forgotpassword'},
    ]},
    {path:"",
        component:BlankLayoutComponent,canActivate:[authGuard],
        children:[
        {path:'home',loadComponent:()=> import('./pages/home/home.component').then((c)=>c.HomeComponent),title:'home',},
        {path:'details/:id',loadComponent:()=>import('./pages/details/details.component').then((c)=>c.DetailsComponent) ,title:'details'},
        {path:'product',loadComponent:()=>import('./pages/home/comopnents/product/product.component').then((c)=>c.ProductComponent),title:'brands'},
        {path:'brands',loadComponent:()=>import('./pages/brands/brands.component').then((c)=>c.BrandsComponent),title:'brands'},
        {path:'allorders',loadComponent:()=>import('./pages/allorders/allorders.component').then((c)=>c.AllordersComponent),title:'allorders'},
        {path:'cart',loadComponent:()=>import('./pages/cart/cart.component').then((c)=>c.CartComponent),title:'cart'},
        {path:'categories',loadComponent:()=>import('./pages/categories/categories.component').then((c)=>c.CategoriesComponent),title:'categories'},
        {path:'checkout/:id',loadComponent:()=>import('./pages/check/check.component').then((c)=>c.CheckComponent),title:'checkout'},
        {path:'**',loadComponent:()=>import('./pages/notfound/notfound.component').then((c)=>c.NotfoundComponent),}
    ]},
];
