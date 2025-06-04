import { Component, inject } from '@angular/core';
import { Category } from '../../types/category';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen = false;
  categoryService = inject(CategoryService);
  hoveredCategory: Category | null = null;
  listCategories: Category[] = [];

  router = inject(Router)
  ngOnInit() {
    this.getServerData();
  }

  private getServerData() {
    this.categoryService.getCategories().subscribe((result: any) => {
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
    console.log(e.target.value)
    this.router.navigateByUrl("/products?search=" + e.target.value);
  }

  searchCategory(id:any) {
    this.router.navigateByUrl("/products?categoryId=" + id!)
  }
}
