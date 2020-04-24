import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ProductService } from './shared/services';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from "./app.routing.module";
import { ProductModule } from "./product/product.module";
//import { SelectedProduct } from "./product/SelectedProduct";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
