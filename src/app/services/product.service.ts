import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {products} from '../data/products'
import {IProduct} from '../models/product';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  showProductDetails=false;

  constructor(private messageService:MessageService) { }

  getProducts():Observable<IProduct[]>{
      this.messageService.add("Product service:getProducts");
      return of(products);
  }

  getProduct(productId:number):Observable<IProduct>{
    this.messageService.add("Product service:getProduct");
    return of(products.filter(product => product.id === +productId)[0]);
}
}
