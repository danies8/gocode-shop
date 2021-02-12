import { Component, OnInit } from '@angular/core';

import {IProduct} from './models/product';
import {products} from '../data/products'
import utils from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  products? :IProduct[];
  filterProducts?: IProduct[];
  categories?:string[]; 
 
  ngOnInit(): void {
      this.products = products;
      this.filterProducts = this.products;
      this. categories = Object.keys(utils.groupBy(this.products, 'category'));
  }

  onSelectedCategory(categoryName:string){
    if(categoryName === ""){
      this.filterProducts = this.products;
    }
    else{
      this.filterProducts = this.products?.filter(g=> g.category === categoryName);
    }

  } 
 }
  