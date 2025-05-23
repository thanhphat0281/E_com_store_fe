import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiLink : string = 'http://localhost:3000/category';
  http = inject(HttpClient);

  constructor() { }

  getCategories() {
    return this.http.get(this.apiLink);
  }

  getCategoryById(id: string) {
    return this.http.get(this.apiLink + '/' + id);
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
