import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Product } from '../types/product';
import { Category } from '../types/category';
import { Brand } from '../types/brand';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http = inject(HttpClient);

  constructor() { }

  getNewProducts() {
    return this.http.get<Product[]>(environment.apiUrl + "/customer/new-products")
  }

  getFeaturedProducts() {
    return this.http.get<Product[]>(environment.apiUrl + "/customer/featured-products")
  }

  getCategories() {
    return this.http.get<Category[]>(environment.apiUrl + "/customer/categories")
  }

   getBrands() {
    return this.http.get<Brand[]>(environment.apiUrl + "/customer/brands")
  }

  getProducts(
    searchTerm: string,
    categoryId: string,
    sortBy: string,
    sortOrder: number,
    brandId: string,
    page: number,
    pageSize: number
  ) {
    let params = new HttpParams()
      .set('searchTerm', searchTerm || '')
      .set('categoryId', categoryId || '')
      .set('sortBy', sortBy || '')
      .set('sortOrder', sortOrder.toString())
      .set('brandId', brandId || '')
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Product[]>(`${environment.apiUrl}/customer/products`, { params });
  }

  getProductById(id:string) {
    return this.http.get<Product>(environment.apiUrl + '/customer/product/' +id);
  }
}
