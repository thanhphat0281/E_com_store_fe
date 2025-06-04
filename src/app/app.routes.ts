import { Routes } from '@angular/router';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesFormComponent } from './components/manage/categories-form/categories-form.component';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandsFormComponent } from './components/manage/brands-form/brands-form.component';
import { ProductsComponent } from './components/manage/products/products.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    //admin category
    {
        path: "admin/categories",
        component: CategoriesComponent
    },
    {
        path: "admin/categories/add",
        component: CategoriesFormComponent
    },
    {
        path: "admin/categories/:id",
        component: CategoriesFormComponent
    },
    //admin brands
    {
        path: "admin/brands",
        component: BrandsComponent
    },
    {
        path: "admin/brands/add",
        component: BrandsFormComponent
    },
    {
        path: "admin/brands/:id",
        component: BrandsFormComponent
    },
    //products
    {
        path: "admin/products",
        component: ProductsComponent
    },
    {
        path: "admin/products/add",
        component: ProductFormComponent
    },
    {
        path: "admin/products/:id",
        component: ProductFormComponent
    },
    //product home
    {
        path: "products",
        component: ProductListComponent
    },
    {
        path: "product/:id",
        component: ProductDetailComponent
    },

    //register
     {
        path: "register",
        component: RegisterComponent
    },

     //login
     {
        path: "login",
        component: LoginComponent
    },
    
];
