import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ProductsComponent, ProductEditComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
  providers: [ProductService]
})
export class ProductsModule {}
