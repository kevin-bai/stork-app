import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Product} from '../product/product.component';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productTitle: string;
  product: Product;

  constructor(
    private routerInfo: ActivatedRoute,
    private productService: ProductServiceService
  ) {
  }

  ngOnInit() {

    const id = this.routerInfo.snapshot.paramMap.get('id');
    this.product = this.productService.getProduct(Number(id));
    console.log(this.product);
    // this.productTitle = this.routerInfo.snapshot.paramMap.get('prodTitle');
  }

}
