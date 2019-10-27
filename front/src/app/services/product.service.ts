import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    products: any;
  constructor(
      private http: Http,
  ) { }

  getProducts() {

    return new Promise ((resolve, reject) => {

      this.http.get('http://127.0.0.1:8000/api/products').subscribe(
          (products) => {
            const jsonDataProducts = this.responseToJson(products);
            this.products = jsonDataProducts['hydra:member'];
            resolve(this.products);
          },
          (error) => {
            reject(error);
          });

    });

  }

  postProducts(product) {
      return new Promise ((resolve, reject) => {

          this.http.post('http://127.0.0.1:8000/api/products', product).subscribe(
              (productData) => {
                  const jsonDataClasses = this.responseToJson(productData);
                  this.products = jsonDataClasses['hydra:member'];
                  console.log(productData);
                  resolve(this.products);
              },
              (error) => {
                  reject(error);
              });

      });

  }

  responseToJson(res) {
        let result: any;
        result = JSON.parse(res['_body']);
        return result;
  }

}
