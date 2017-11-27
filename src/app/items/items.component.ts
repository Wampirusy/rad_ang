import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    this.itemService.getItem(this.getId())
      .subscribe(item => this.item = item);
  }

  getId() {
    const path = this.route.snapshot.paramMap.get('alias').match(/^\d+/);

    if (path) {
      return path[0];
    }
  }
}
