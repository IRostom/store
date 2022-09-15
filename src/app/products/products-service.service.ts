import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModule } from './products.module';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProductsList(): Observable<any> {
    return this.httpClient.get<any>(
      'https://fakestoreapi.com/products?limit=10'
    );
  }

  getProductDetails(productId: number) {
    return this.httpClient.get(
      `https://fakestoreapi.com/products/${productId}`
    );
  }

  addProduct(product: any) {
    return this.httpClient.post('https://fakestoreapi.com/products', product);
  }
}
