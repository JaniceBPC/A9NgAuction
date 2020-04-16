import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from "./SelectivePreloadingStrategyService";
import { ProductComponent } from "./product/product.component";

const appRoutes: Routes = [
  {
    path: "products/:productId",
    component: ProductComponent,
  },
  {
    path: '',
    loadChildren: () => import("./home/home.module").then(m=> m.HomeModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
