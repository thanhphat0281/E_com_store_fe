import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [MatButtonModule,],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {


  router = inject(Router);

  goManageProduct() {
    this.router.navigateByUrl("/admin/products");
  }

   goManageBrand() {
    this.router.navigateByUrl("/admin/brands");
  }

   goManageCategory() {
    this.router.navigateByUrl("/admin/categories");
  }
}
