import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;
  constructor(private prodService: ProductService) {}

  ngOnInit() {}

  onDeleteItem(product: Product) {
    if (
      confirm(
        'Você tem certeza em que deseja excluir o produto ' + product.name + '?'
      )
    ) {
      this.prodService.deleteProduct(product);
    }
  }
}
