import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public productsList: any[] = [];
  public isLoading: boolean = false;

  constructor(private ProductsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.isLoading = true;
    this.ProductsService.getProductsList().subscribe({
      next: (res) => {
        this.productsList = [...res];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  navigateToProductDetails(productId: number) {
    this.router.navigateByUrl(`products/${productId}`)
  }
}
