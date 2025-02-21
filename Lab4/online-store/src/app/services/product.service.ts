import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
import { KaspiResponse, KaspiProduct } from '../models/kaspi.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://kaspi.kz/yml/product-view/pl/filters?text=macbook%20pro%202024&qs=history&hint_chips_click=false&page=0&all=false&fl=true&ui=d&q=%3AavailableInZones%3AMagnum_ZONE1&i=-1&c=750000000';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({
      'accept': 'application/json, text/*',
      'accept-encoding': 'gzip, deflate, br, zstd:',
      'accept-language': 'ru-RU,ru;q=0.9,kk-KZ;q=0.8,kk;q=0.7,en-US;q=0.6,en;q=0.5,zh-CN;q=0.4,zh;q=0.3:',
      'cache-control': 'no-cache',
      'connection': 'keep-alive',
      'cookie': 'ks.tg=45; k_stat=35e67974-e54f-437c-a832-d51a53a194c0; kaspi.storefront.cookie.city=750000000; locale=ru-RU:',
      'host': 'kaspi.kz',
      'pragma': 'no-cache',
      'referer': 'https://kaspi.kz/shop/search/?text=macbook%20pro%202024&qs=history&hint_chips_click=false',
      'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
      'x-ks-city': '750000000'
    });

    return this.http.get<KaspiResponse>(this.baseUrl, {
      headers: headers
      // params: {
      //   csrf: '984377b71457c4f5f8a3649f91046710',
      //   username: 'admin',
      //   secret: '12345678'
      // }
    }).pipe(
      map(response => this.transformProducts(response.data.cards))
    );
  }

  private transformProducts(kaspiProducts: KaspiProduct[]): Product[] {
    return kaspiProducts.map((kp, index) => ({
      id: index + 1,
      name: kp.title.split('/')[0].trim(),
      description: kp.title,
      rating: kp.rating,
      price: kp.unitPrice,
      installmentPrice: kp.creditMonthlyPrice,
      reviewCount: kp.reviewsQuantity,
      image: kp.previewImages[0].large,
      kaspiLink: `https://kaspi.kz${kp.shopLink}`
    }));
  }
} 