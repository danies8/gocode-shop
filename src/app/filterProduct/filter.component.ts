import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() categories? :string[];
  @Output() selectedCategory = new EventEmitter();
  selectCategoryName="";

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }

  onSelectedCategory(){
    this.messageService.add(`Filter component:on selected category: ${this.selectCategoryName}`)
    this.selectedCategory.emit(this.selectCategoryName);
  }
}
