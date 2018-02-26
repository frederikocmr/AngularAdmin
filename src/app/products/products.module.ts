import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ProductsComponent, ProductEditComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ProductService]
})
export class ProductsModule {}
