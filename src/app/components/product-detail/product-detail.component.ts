import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-detail',
  imports: [
    CommonModule,
    MatButtonModule,
    ProductCardComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  customerService = inject(CustomerService);
  route = inject(ActivatedRoute);
  product!: Product;
  mainImage!: string;
  sellValue!: Number;
  similarProducts: Product[] = [];

  ngOnInit() {
    this.route.params.subscribe((x:any)=> {
      this.getProductDetail(x.id);
    })
  }

  getProductDetail(id:string) {
     this.customerService.getProductById(id).subscribe(result => {
      this.product = result;
      this.mainImage = this.product.images[0];
      this.customerService.getProducts('', this.product.categoryId, '', -1, '', 1, 5).subscribe(result => {
        this.similarProducts = result;
      })
    })
  }

  changeImage(item: string) {
    this.mainImage = item;
  }

  get sellingPrice() {
    const price = Number(this.product?.price) || 0;
    const discount = Number(this.product?.discount) || 0;
    return this.sellValue = Math.round(price - (price * discount) / 100)
  }
}
