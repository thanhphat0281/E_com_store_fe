import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
@Input() product!:Product;
  sellValue!: Number;

get sellingPrice() {
    const price = Number(this.product?.price) || 0;
    const discount = Number(this.product?.discount) || 0;
    return this.sellValue = price - (price * discount) / 100
  }
}
