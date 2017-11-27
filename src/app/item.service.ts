import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Category } from './category';
import { Item } from './item';

import { ITEMS } from './mock-itemss';
import { CATS } from './mock-cats';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(category_id): Observable<Item[]> {
    return of(ITEMS);
  }

  getItem(id): Observable<Item> {
    return of(ITEMS[id]);
  }
}
