//import { Injectable } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { Observable, Subject } from 'rxjs';
//import { Product, ProductService } from '../shared/services';

//@Injectable()
//export class SelectedProduct  {

//  product: Product;
//  product$: Observable<Product>;

//  constructor(
//    private productService: ProductService,
//    private activatedRoute: ActivatedRoute) {
//    console.log("Selected Product Created");

//    //this.setup();
//  }
//  //private  async setup() {
//  //  console.log("Selected product setup");

//  //  const source = this.activatedRoute.paramMap
//  //    .pipe(
//  //      map(params => parseInt(params.get('productId') || '', 10)),
//  //      filter(productId => !!productId),
//  //      switchMap(productId => this.productService.getById(productId))
//  //  );

//  //  const subject = new Subject<Product>();

//  //  source.subscribe(subject);

//  //  subject.subscribe(x => `Selection: ${x}`);

//  //  //this.product$ = source;
//  }

//  resolveAfter2Seconds(x) {
//    return new Promise(resolve => {
//      setTimeout(() => {
//        resolve(x);
//      }, 2000);
//    });
//  }
//  async addWithAsync() {

//    const result1 = await this.resolveAfter2Seconds(20) as number;
//    const result2 = await this.resolveAfter2Seconds(30) as number;
//    const additionAsyncResult = result1 + result2;
//    console.log(`async result: ${additionAsyncResult}`);
//  }
//  private example() {
//    //var source = from(1,2,3);
//    //  Subject < Number > subject = new Subject<Number>();
//    //var subSource = source.Subscribe(subject);
//    //var subSubject1 = subject.Subscribe(
//    //  x => Console.WriteLine("Value published to observer #1: {0}", x),
//    //  () => Console.WriteLine("Sequence Completed."));
//    //var subSubject2 = subject.Subscribe(
//    //  x => Console.WriteLine("Value published to observer #2: {0}", x),
//    //  () => Console.WriteLine("Sequence Completed."));
//    //Console.WriteLine("Press any key to continue");
//    //Console.ReadKey();
//    //subject.OnCompleted();
//    //subSubject1.Dispose();
//    //subSubject2.Dispose();
//}
//}
