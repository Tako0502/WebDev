import { Component, OnInit } from '@angular/core';
import {Category} from "./category.model";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {CommonModule} from "@angular/common";
import {DBService} from "./dbservices";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ProductListComponent, ProductItemComponent, CommonModule],
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Online Store";
  categories: Category[];
  selectedCategory!: Category;

  constructor(private dbService: DBService) {
    this.categories = dbService.categories;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
