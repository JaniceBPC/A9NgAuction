import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {

    console.log(document.getElementsByTagName('base')[0].href);

    console.log("Base Url:");
    const products = this.http.get<Product[]>('/data/products.json');

    console.log("List of products");

    products.subscribe({
      next(response) { console.log(response.values().toLocaleString()); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });

    console.log("Exiting products service getAll");
    return products;
  }

  getById(productId: number): Observable<Product> {
    return this.http.get<Product[]>('/data/products.json')
      .pipe(
        map(products => products.find(p => p.id === productId) as Product)
      );
  }
}
