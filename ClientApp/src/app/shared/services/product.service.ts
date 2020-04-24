import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Injectable()
export class ProductService  {
  constructor(private http: HttpClient) {

    console.log("Product Service Created");

    this.setup();
  }

  public productsObservable$: Observable<Product[]>;
  public products: Product[];

  private setup() {
    console.log("Setup Product Service");

    console.log("Base Url:");
    console.log(`.. ${document.getElementsByTagName('base')[0].href}`);

    this.productsObservable$ = this.http.get<Product[]>('/data/products.json');

    //console.log("List of products");

    //this.productsObservable$.subscribe((x: Product[]) => {
    //  this.products = x;
    //}
    //);
  }
  getAll(): Observable<Product[]> {
    return this.productsObservable$;
  }

  getById(productId: number): Observable<Product> {
    const productObservable = this.http.get<Product[]>('/data/products.json')
      .pipe(
        map((products: Product[]) => products.find(p => p.id === productId) as Product)
    );

    return productObservable;
  }
}
