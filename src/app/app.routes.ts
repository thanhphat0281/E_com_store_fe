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
import { authGuard } from './core/auth-guard';
import { AdminDashboardComponent } from './components/manage/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './core/admin-guard';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        canActivate: [authGuard]
    },
    //admin category
    {
        path: "admin",
        component: AdminDashboardComponent,
        canActivate: [adminGuard]
    },

    {
        path: "admin/categories",
        component: CategoriesComponent,
        canActivate: [adminGuard]
    },
    {
        path: "admin/categories/add",
        component: CategoriesFormComponent,
        canActivate: [adminGuard]
    },
    {
        path: "admin/categories/:id",
        component: CategoriesFormComponent,
        canActivate: [adminGuard]
    },
    //admin brands
    {
        path: "admin/brands",
        component: BrandsComponent,
        canActivate: [adminGuard]
    },
    {
        path: "admin/brands/add",
        component: BrandsFormComponent,
        canActivate: [adminGuard]
    },
    {
        path: "admin/brands/:id",
        component: BrandsFormComponent,
        canActivate: [adminGuard]
    },
    //products
    {
        path: "admin/products",
        component: ProductsComponent,
        canActivate: [adminGuard]
    },
    {
        path: "admin/products/add",
        component: ProductFormComponent,
        canActivate: [adminGuard]
    },
    {
        path: "admin/products/:id",
        component: ProductFormComponent,
        canActivate: [adminGuard]
    },
    //product home
    {
        path: "products",
        component: ProductListComponent,
        canActivate: [authGuard]
    },
    {
        path: "product/:id",
        component: ProductDetailComponent,
        canActivate: [authGuard]
    },
    //profile
    {
        path: "profile",
        component: CustomerProfileComponent,
        canActivate: [authGuard]
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
