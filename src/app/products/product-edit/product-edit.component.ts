import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private prodService: ProductService) {
    this.productForm = fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(80)
        ])
      ],
      description: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(130)
        ])
      ],
      price: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9 .]+$')
        ])
      ],
      measure: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
          Validators.minLength(2),
          Validators.maxLength(2)
        ])
      ],
      categoryPath: ['linguicas-tradicionais', Validators.required],
      img: null
    });
  }

  ngOnInit() {}

  onSubmitForm() {
    if (this.productForm.valid && this.productForm.touched) {
      this.prodService.addProduct(this.productForm.value);
    } else {
      alert('O formulário está inválido!');
    }
  }

  onClearForm() {
    this.productForm.reset();
  }
}
