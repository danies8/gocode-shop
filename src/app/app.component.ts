import { Component, OnInit } from '@angular/core';

import { IProduct } from './models/product';
import { products } from '../data/products';
import utils from './utils';
import { ProductService } from './services/product.service';
import { IProductSortOptions } from './models/productSort';
import { ProductSortService } from './services/product-sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: IProduct[] = [];
  filterProducts: IProduct[] = [];
  categories: string[] = [];

  constructor(
    private producService: ProductService,
    private productSortService: ProductSortService
  ) {}

  ngOnInit(): void {
    this.producService.getProducts().subscribe((products) => {
      (this.products = products),
        (this.filterProducts = this.products),
        (this.categories = Object.keys(
          utils.groupBy(this.products, 'category')
        ));
    });
  }

  onSelectedCategory(categoryName: string) {
    if (categoryName === '') {
      this.filterProducts = this.products;
    } else {
      this.filterProducts = this.products?.filter(
        (product) => product.category === categoryName
      );
    }
  }
  onSelectedSortCategory(sortCategoryId: number) {
    if (+sortCategoryId === 0) {
      this.filterProducts = this.products;
    } else {
      let sortOptionsArr: IProductSortOptions[] = [];
      this.productSortService
        .getProductSortOptions()
        .subscribe(
          (productSortOptions) => (sortOptionsArr = productSortOptions)
        );
      let obj = sortOptionsArr[sortCategoryId - 1];
      let key = obj.key;
      let isDescending = obj.desc;
      let type = obj.type;
      if(type == "string"){
          utils.sortOnString(this.products, key, isDescending);
      }
      else{
        utils.sortOnNumber(this.products, isDescending);
      }
       this.filterProducts = this.products;
    }
  }
}
