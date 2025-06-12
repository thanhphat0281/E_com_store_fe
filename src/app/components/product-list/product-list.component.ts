import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Product } from '../../types/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { Category } from '../../types/category';
import { Brand } from '../../types/brand';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCardComponent,
    MatSelectModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  customerService = inject(CustomerService);
  route = inject(ActivatedRoute);
  searchTerm: string = '';
  categoryId: string = '';
  sortBy: string = '';
  sortOrder: number = -1;
  brandId: string = '';
  page = 1;
  pageSize = 6;
  products: Product[] = [];
  category: Category[] = [];
  brands: Brand[] = [];
  isNext = true;
  ngOnInit() {
    this.customerService.getCategories().subscribe(result => {
      this.category = result;
    });

    this.customerService.getBrands().subscribe(result => {
      this.brands = result;
    });

    this.route.queryParams.subscribe((x: any) => {
      this.searchTerm = x.search;
      this.categoryId = x.categoryId;
      this.getProducts()
    })
  }

  getProducts() {
    setTimeout(() => {
      this.customerService.getProducts(
        this.searchTerm,
        this.categoryId,
        this.sortBy,
        this.sortOrder,
        this.brandId,
        this.page,
        this.pageSize,
      ).subscribe((result) => {
        this.products = result;
        if (result.length < this.pageSize) {
          this.isNext = false;
        }
      })
    }, 500)

  }

  orderChange(e: any) {
    this.sortBy = 'price';
    this.sortOrder = e;
    this.getProducts();
  }

  pageChange(page: number) {
    console.log(page)
    this.page = page;
    this.isNext = true;
    this.getProducts();
  }
}
