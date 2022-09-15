import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public form: FormGroup = {} as FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  submit() {
    this.isLoading = true;
    console.log(this.form.value);
    this.productsService.addProduct(this.form.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.toastr.success('Success!', 'Product added successfully!');

      },
      error: (err) => {
        this.isLoading = false;
        this.toastr.error('Error!', err.msg);
      },
    });
  }
}
