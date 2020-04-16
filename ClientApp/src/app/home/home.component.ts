import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'nga-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly columns$: Observable<number>;
  readonly products$: Observable<Product[]>;

  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ],
  ]);

  constructor(private media: MediaObserver, private productService: ProductService) {
    this.products$ = this.productService.getAll();

    // At the time of this writing, if the initial screen size is xs MediaObserver doesn't emit an event
    // and grid-list rendering fails (see https://github.com/angular/flex-layout/issues/388).
    // This issue is marked as resolved, but it still exists.
    // As a workaround, you can use startWith(3).

    this.columns$ = this.media.asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0].value),
        startWith(3) // bug workaround
      );
  }
}
