import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemsComponent } from './items/items.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';
import { ItemService } from './item.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ItemsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CategoryService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
