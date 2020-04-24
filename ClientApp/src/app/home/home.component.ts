import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'nga-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  columns$: Observable<number>;
  products$: Observable<Product[]>;

  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 2],
    ['md', 3],
    ['lg', 4],
    ['xl', 5],
  ]);

  constructor(
    private media: MediaObserver,
    private productService: ProductService) {
    console.log("Home component created");
  }
  ngOnInit() {
    console.log("Home component initialized");

    this.products$ = this.productService.productsObservable$;

    // At the time of this writing, if the initial screen size is xs MediaObserver doesn't emit an event
    // and grid-list rendering fails (see https://github.com/angular/flex-layout/issues/388).
    // This issue is marked as resolved, but it still exists.
    // As a workaround, you can use startWith(3).

    //console.log("Get media change observable");

    //const mediaChange = this.media.asObservable()
    //  .pipe(
    //    filter((changes: MediaChange[]) => changes.length > 0),
    //    map((changes: MediaChange[]) => changes[0].value)
    //  );
    //console.log("Media change subscription console logging");

    //const logMediaChange = this.media.asObservable()
    //  .pipe(
    //    filter((changes: MediaChange[]) => changes.length > 0),
    //    map(x => x.map(y => `elem=${x.length}, alias=${y.mqAlias}, value=${y.value}, priority=${y.priority} suffix=${y.suffix} matches=${y.matches}\n`))
    //  );
    //logMediaChange.subscribe(x => console.log(x));

    //console.log(".. finished log");

    //this.columns$ = this.media.asObservable()
    //  .pipe(
    //    filter((changes: MediaChange[]) => changes.length > 0),
    //    map((changes: MediaChange[]) => changes[0].value),
    //    startWith(3) // bug workaround
    //  );
  }
}
