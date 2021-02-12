import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() categories? :string[];
  @Output() selectedCategory = new EventEmitter();
  selectCategoryName="";

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedCategory(){
    this.selectedCategory.emit(this.selectCategoryName);
  }
}
