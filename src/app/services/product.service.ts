import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
apiLink : string = environment.apiUrl +'/product';
  http = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.http.get<Product[]>(this.apiLink);
  }

  getProductById(id: string) {
    return this.http.get<Product>(this.apiLink + '/' + id);
  }

  addProduct(model: Product) {
    return this.http.post(this.apiLink,model);
  }
  updateProduct(id: string, model: Product) {
    return this.http.put(this.apiLink + '/' + id, model);
  }

  deleteProductByid(id: string) {
    return this.http.delete(this.apiLink + '/'+ id);
  }
}
