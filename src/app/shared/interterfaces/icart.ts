import { Data } from "@angular/router"
import { Subcategory } from "./iproguct"

export interface Icart {
    
     products:CartData[]
        numOfCartItems: number
        cartId: string
        data: CartData
        totalCartPrice: number
        cartOwner:string
        createdAt:Data
        updateAt:Data
        __v:number
}
     
      
      export interface CartData {
        _id: string
        products: Product[]
       price:number
       count:number

      }
      
      export interface Product {
        count: number
        id: string
        product: ProductDetails
        price: number
      }
      
      export interface ProductDetails {
        subcategory: Subcategory[]
        _id: string
        title: string
        quantity: number
        imageCover: string
        category: Category
        brand: Brand
        ratingsAverage: number
        id: string
      }
      export interface Category {
        _id: string
        name: string
        slug: string
        image: string
      }
      
      export interface Brand {
        _id: string
        name: string
        slug: string
        image:string
  }


