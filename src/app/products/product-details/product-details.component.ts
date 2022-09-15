import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public product: any;
  public isLoading: boolean = false;

  constructor(
    private ProductsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.getProductDetails(+productId);
    }
  }

  getProductDetails(productId: number) {
    this.isLoading = true;
    this.ProductsService.getProductDetails(productId).subscribe({
      next: (res) => {
        this.product = { ...res };
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
