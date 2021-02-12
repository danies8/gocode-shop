import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IProductSortOptions } from '../models/productSort';
import { MessageService } from './message.service';
import {sortProductsOptions} from '../data/sortProductsOptions'

@Injectable({
  providedIn: 'root'
})
export class ProductSortService {

  constructor(private messageService:MessageService) { }

  getProductSortOptions():Observable<IProductSortOptions[]>{
      this.messageService.add("Product sort service:getProductSortOptions");
      return of(sortProductsOptions);
  }
}
