import { map, startWith, filter } from 'rxjs/operators';
import { Component, Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Product } from '../../shared/services';

@Component({
  selector: 'nga-product-suggestion',
  styleUrls: [ './product-suggestion.component.scss' ],
  templateUrl: './product-suggestion.component.html'
})
export class ProductSuggestionComponent {
  @Input() products: Product[];
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 2 ],
    [ 'sm', 3 ],
    [ 'md', 5 ],
    [ 'lg', 2 ],
    [ 'xl', 3 ],
  ]);

  constructor(private media: MediaObserver) {
    // If the initial screen size is xs MediaObserver doesn't emit an event
    // and grid-list rendering fails. Once the following issue is closed, this
    // comment can be removed: https://github.com/angular/flex-layout/issues/388
    this.columns$ = this.media.asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0].value),
        startWith(3) // bug workaround
      );
  }
}
