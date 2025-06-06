import { Component, inject } from '@angular/core';
import { Category } from '../../types/category';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen = false;
  customerService = inject(CustomerService);
  hoveredCategory: Category | null = null;
  listCategories: Category[] = [];

  router = inject(Router);
  authService = inject(AuthService);
  searchTerm!:string;
  ngOnInit() {
    this.getServerData();
  }

  private getServerData() {
    this.customerService.getCategories().subscribe((result: any) => {
      this.listCategories = result;
    });
  }
  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.hoveredCategory = null;
  }

  onSearch(e: any) {
    console.log(e.target.value);
    this.searchTerm = ""
    this.router.navigateByUrl("/products?search=" + e.target.value);
  }

  searchCategory(id: any) {
    this.router.navigateByUrl("/products?categoryId=" + id!)
  }
  logout() {
    this.authService.loggout();
    this.router.navigateByUrl("/login");
  }
  goToLogin() {
    this.router.navigateByUrl("/login");
  }

  goToLProfile() {
    this.router.navigateByUrl("/profile");
  }
  goToLDashboard() {
    this.router.navigateByUrl("/admin");
  }

}
