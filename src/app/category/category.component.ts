import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { ItemService } from '../item.service';

import { Category } from '../category';
import { Item } from '../item';
// import { ITEMS } from '../mock-itemss';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category;

  items: Item[];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.getCategory();
    this.getItems();
  }

  getCategory(): void {
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('alias'))
      .subscribe(category => this.category = category);
  }

  getItems(): void {
    this.itemService.getItems(this.category.id)
    // this.itemService.getItems(1)
      .subscribe(items => this.items = items);
  }
}
