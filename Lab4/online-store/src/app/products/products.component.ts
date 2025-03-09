import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple MacBook Pro 16 2024',
      description: 'Apple MacBook Pro 16 2024 / 24 GB / SSD 512 GB / macOS / MX2X3',
      rating: 5,
      price: 1494988,
      installmentPrice: 62292,
      reviewCount: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-24-gb-ssd-512-gb-macos-mx2x3-132090061/'
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 14 2024',
      description: 'Apple MacBook Pro 14 2024 / 24 GB / SSD 512 GB / macOS / MX2E3',
      rating: 5,
      price: 1138460,
      installmentPrice: 47436,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/pa5/15675602.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2e3-132140922/'
    },
    {
      id: 3,
      name: 'Apple MacBook Pro 14 2024',
      description: 'Apple MacBook Pro 14 2024 / 16 GB / SSD 512 GB / macOS / MW2U3',
      rating: 5,
      price: 1024579,
      installmentPrice: 42691,
      reviewCount: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-16-gb-ssd-512-gb-macos-mw2u3-132088460/'
    },
    {
      id: 4,
      name: 'Apple MacBook Air 13 2024',
      description: 'Apple MacBook Air 13 2024 13.6" / 8 GB / SSD 256 GB / macOS / MRXT3',
      rating: 5,
      price: 581111,
      installmentPrice: 24213,
      reviewCount: 25,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p90/p2a/5393287.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxt3-118723338/'
    },
    {
      id: 5,
      name: 'Apple MacBook Pro 14 2024',
      description: 'Apple MacBook Pro 14 2024 / 24 GB / SSD 1024 GB / macOS / MCX04RU/A',
      rating: 5,
      price: 1394980,
      installmentPrice: 58125,
      reviewCount: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9b/p40/15960234.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-1024-gb-macos-mcx04ru-a-132224847/'
    },
    {
      id: 6,
      name: 'Apple MacBook Pro 14 2024',
      description: 'Apple MacBook Pro 14 2024 / 24 GB / SSD 512 GB / macOS / MX2H3',
      rating: 5,
      price: 1134955,
      installmentPrice: 47290,
      reviewCount: 15,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/'
    },
    {
      id: 7,
      name: 'Apple MacBook Pro 16 2024',
      description: 'Apple MacBook Pro 16 2024 / 24 GB / SSD 512 GB / macOS / MX2T3',
      rating: 5,
      price: 1585662,
      installmentPrice: 66070,
      reviewCount: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/p7e/15960093.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-24-gb-ssd-512-gb-macos-mx2t3-132224821/'
    },
    {
      id: 8,
      name: 'Apple MacBook Pro 16 2024',
      description: 'Apple MacBook Pro 16 2024 / 48 GB / SSD 512 GB / macOS / MX2Y3',
      rating: 5,
      price: 1886606,
      installmentPrice: 78609,
      reviewCount: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/pb7/15675993.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-48-gb-ssd-512-gb-macos-mx2y3-132141367/'
    },
    {
      id: 9,
      name: 'Apple MacBook Pro 16 2024',
      description: 'Apple MacBook Pro 16 2024 / 48 GB / SSD 512 GB / macOS / MX2U3',
      rating: 4,
      price: 1816747,
      installmentPrice: 75698,
      reviewCount: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/p21/15528180.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-48-gb-ssd-512-gb-macos-mx2u3-132090082/'
    },
    {
      id: 10,
      name: 'Apple MacBook Pro 14 2024',
      description: 'Apple MacBook Pro 14 2024 / 24 GB / SSD 1000 GB / macOS / MX2J3',
      rating: 5,
      price: 1621446,
      installmentPrice: 67561,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p25/15673696.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-1000-gb-macos-mx2j3-132140673/'
    }
  ];

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