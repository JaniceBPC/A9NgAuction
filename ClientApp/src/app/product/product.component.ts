import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//import { Subject } from 'rxjs/Subject';
import { Product, ProductService } from '../shared/services';
import { ActivatedRoute } from "@angular/router";
import { filter, map, switchMap } from 'rxjs/operators';
import { Product as IProduct } from "../shared/services/product.service";


@Component({
  selector: 'nga-product',
  styleUrls: [ './product.component.scss' ],
  templateUrl: './product.component.html'
})
export class ProductComponent  {
  product$: Observable<Product>;
  suggestedProducts$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.setup();
  }

  private  async setup() {
    const source = this.activatedRoute.paramMap
      .pipe(
        map(params => parseInt(params.get('productId') || '', 10)),
        filter(productId => !!productId),
        switchMap(productId => this.productService.getById(productId)));

    const subject = new Subject<IProduct>();

    source.subscribe(subject);

    subject.subscribe(x => console.log(`Selection: ${x}, ${x.title}`));

    this.product$ = source;

    this.suggestedProducts$ = this.productService.productsObservable$;
  }
}
