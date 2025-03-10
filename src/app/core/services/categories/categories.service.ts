import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  getAllCategories() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }
  getCategories():Observable <any>
  {
    return this.httpClient.get(
      'https://ecommerce.routemisr.com/api/v1/categories'
    )
  }
  getSpecificCategories(id:string):Observable <any>
  {
    return this.httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`
    )
  }
}
