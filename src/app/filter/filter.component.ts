import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

import {product} from '../product';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() categories? :string[];
  @Output() selectedCategory = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedCategory(categoryName:string){
    this.selectedCategory.emit(categoryName);
  }
}
