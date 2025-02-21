import { Component, Input } from '@angular/core';
import { Category } from '../category.model';
import { ProductItemComponent } from "../product-item/product-item.component";
import { CommonModule } from "@angular/common";
import { Product } from "../product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    ProductItemComponent,
    CommonModule
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() product!: Product;
  @Input() category!: Category;
}
