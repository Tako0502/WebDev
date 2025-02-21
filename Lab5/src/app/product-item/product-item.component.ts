import { Component, Input } from '@angular/core';
import {Product} from "../product.model";
import {DBService} from "../dbservices";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  standalone: true,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  constructor(private dbService : DBService) {}

  like(productId:number) {
    this.dbService.likeProduct(productId);
  }

  remove(productId:number) {
    this.dbService.removeProduct(productId);
  }
}
