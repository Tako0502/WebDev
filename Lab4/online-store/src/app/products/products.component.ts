import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  share(product: Product, platform: 'whatsapp' | 'telegram') {
    const message = `Check out this product: ${product.name} - ${product.kaspiLink}`;
    const encodedMessage = encodeURIComponent(message);
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    } else {
      window.open(`https://t.me/share/url?url=${product.kaspiLink}&text=${encodedMessage}`, '_blank');
    }
  }
} 