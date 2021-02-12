import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IProductSortOptions } from '../models/productSort';
import { MessageService } from '../services/message.service';
import { ProductSortService } from '../services/product-sort.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Output() selectedSortCategory = new EventEmitter<number>();
  sortCategoryId:number = 0;
  productSortOptions :IProductSortOptions[] = [];
  
  constructor(
    private productSortService:ProductSortService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.productSortService.getProductSortOptions()
    .subscribe(productSortOptions => this.productSortOptions = productSortOptions);
  }

  onSelectedSortProductName(){ 
    this.messageService.add(`Sort component:on selected sort category: ${this.sortCategoryId}`)
    this.selectedSortCategory.emit(this.sortCategoryId);
  }

}
