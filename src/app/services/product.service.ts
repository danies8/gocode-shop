import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {products} from '../../data/products'
import {IProduct} from '../models/product';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService:MessageService) { }

  getProducts():Observable<IProduct[]>{
      this.messageService.add("Product service:getProducts");
      return of(products);
  }
}
