import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Brand } from '../../../types/brand';
import { Category } from '../../../types/category';
import { CategoryService } from '../../../services/category.service';
import { BrandService } from '../../../services/brand.service';



@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  formBuilder = inject(FormBuilder);

  productForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(5)]],
    shortDescription: [null, [Validators.required, Validators.minLength(10)]],
    description: [null, [Validators.required, Validators.minLength(50)]],
    price: [null, [Validators.required]],
    discount: [],
    images: this.formBuilder.array([]),
    categoryId: [null, [Validators.required]],
    brandId: [null, [Validators.required]],
  });

  categoryService = inject(CategoryService);
  brandService = inject(BrandService);
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  brands: Brand[] = [];
  categories: Category[] = [];
  isEdit = false;
  id!: string;

  ngOnInit() {

    this.addImage();

    this.id = this.route.snapshot.params["id"];
    console.log(this.id)
    if (this.id) {
      this.isEdit = true;
      this.productService.getProductById(this.id).subscribe(result => {
        for (let index = 0; index <result.images.length;index++) {
          this.addImage();
        }
        this.productForm.patchValue(result as any);
      })
    } else {
      this.addImage();
    }

    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
    })
    this.brandService.getBrands().subscribe((result) => {
      this.brands = result;
    })
  }

  get images() {
    return this.productForm.get('images') as FormArray;
  }


  add() {
    let value = this.productForm.value;
    console.log(value)
    this.productService.addProduct(value as any).subscribe((result: any) => {
      alert("Product added");
      this.router.navigateByUrl("/admin/products");
    })
  }

  // update() {
  //   console.log(this.name);
  //   this.productService.updateProduct(this.id, this.name).subscribe((result: any) => {
  //     alert("Product updated");
  //     this.router.navigateByUrl("/admin/products");
  //   })
  // }

  addImage() {
    this.images.push(this.formBuilder.control(null))
  }

  removeImage() {
    this.images.removeAt(this.images.controls.length - 1);
  }
}
