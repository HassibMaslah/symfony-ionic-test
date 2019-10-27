import { Component } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private productService: ProductService) {}

  validate(form) {
    console.log(form.value);
    this.productService.postProducts(form.value).then((products: any[]) => {
      console.log(products);
    });
  }
}
