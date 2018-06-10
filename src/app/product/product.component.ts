import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: Product[];

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '第1个商品', 15, 4, '哈哈哈哈哈哈啊哈和', ['aaa1', 'bbbb1']),
      new Product(2, '第2个商品', 15, 3.5, '哈哈哈哈哈哈啊哈和', ['aaa2', 'bbbb2']),
      new Product(3, '第3个商品', 15, 5, '哈哈哈哈哈哈啊哈和', ['aaa3', 'bbbb3']),
      new Product(4, '第4个商品', 15, 2, '哈哈哈哈哈哈啊哈和', ['aaa4', 'bbbb4']),
    ];
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: string[]
  ) {

  }
}
