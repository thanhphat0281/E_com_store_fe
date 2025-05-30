import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Brand } from '../types/brand';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiLink: string = environment.apiUrl + '/brand';
  http = inject(HttpClient);

  constructor() { }

  getBrands() {
    return this.http.get<Brand[]>(this.apiLink);
  }

  getBrandById(id: string) {
    return this.http.get<Brand>(this.apiLink + '/' + id);
  }

  addBrand(name: string) {
    return this.http.post(this.apiLink, {
      name: name,
    });
  }
  updateBrand(id: string, name: string) {
    return this.http.put(this.apiLink + '/' + id, {
      name: name,
    });
  }

  deleteBrandByid(id: string) {
    return this.http.delete(this.apiLink + '/' + id);
  }
}
