import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then((products: any[]) => {
        this.products = products;
    });
  }

}
