import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../types/category';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiLink : string = environment.apiUrl +'/category';
  http = inject(HttpClient);

  constructor() { }

  getCategories() {
    return this.http.get<Category[]>(this.apiLink);
  }

  getCategoryById(id: string) {
    return this.http.get<Category>(this.apiLink + '/' + id);
  }

  addCategory(name: string) {
    return this.http.post(this.apiLink, {
      name: name,
    });
  }
  updateCategory(id: string, name: string) {
    return this.http.put(this.apiLink + '/' + id, {
      name: name,
    });
  }

  deleteCategoryByid(id: string) {
    return this.http.delete(this.apiLink + '/'+ id);
  }
}
