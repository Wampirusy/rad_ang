import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from './category';

@Injectable()
export class CategoryService {

  private categoriesUrl = 'http://localhost:3000/rest/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    console.log(this.http.get<Category[]>(this.categoriesUrl));
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getCategory(alias): Observable<Category> {
    return this.http.get<Category>(this.categoriesUrl + '/2');


    const url = this.categoriesUrl + '?where[alias]=' + alias;

    console.log(this.http.get<Category[]>(url));

    return this.http.get<Category[]>(url)[0];
  }
}
