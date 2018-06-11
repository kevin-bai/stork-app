import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CarouselComponent} from './carousel/carousel.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProductComponent} from './product/product.component';
import {StarsComponent} from './stars/stars.component';
import {SearchComponent} from './search/search.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { SpyDirective } from './spy.directive';

const appRoutes: Routes = [
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    ProductDetailComponent,
    SpyDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
